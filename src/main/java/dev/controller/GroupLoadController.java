package dev.controller;

import dev.dto.GroupLoadDto;
import dev.dto.GroupedListDto;
import dev.model.Discipline;
import dev.model.GroupLoad;
import dev.model.GroupStudy;
import dev.repository.GroupLoadRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(value = "/api/groupLoad")
public class GroupLoadController {
    private final GroupLoadRepository groupLoadRepository;

    public GroupLoadController(GroupLoadRepository groupLoadRepository) {
        this.groupLoadRepository = groupLoadRepository;
    }

    @Autowired
    private ModelMapper modelMapper;

    public GroupLoadDto convertToDto(GroupLoad load) {
        GroupLoadDto groupLoadDto = modelMapper.map(load, GroupLoadDto.class);
        return groupLoadDto;
    }

    @GetMapping("/")
    public ResponseEntity<List<GroupedListDto<Discipline, GroupedListDto<GroupStudy, GroupLoadDto>>>> getAllGroupLoads() {

        Map<Discipline, Map<GroupStudy, List<GroupLoad>>> groupedNotMapped = groupLoadRepository
                .findAll()
                .stream()
                .sorted(Comparator.comparing(gl -> gl.getGroupStudy().getName()))
                .collect(groupingBy(GroupLoad::getDiscipline, groupingBy(GroupLoad::getGroupStudy)));

        List<GroupedListDto<Discipline, GroupedListDto<GroupStudy, GroupLoadDto>>> result = groupedNotMapped
                .entrySet()
                .stream()
                .map(discipline ->
                {
                    List<GroupedListDto<GroupStudy, GroupLoadDto>> groupedListDtoStream = discipline
                            .getValue()
                            .entrySet()
                            .stream()
                            .map(groupStudy ->
                            {
                                List<GroupLoadDto> loadDtoList = groupStudy
                                        .getValue()
                                        .stream()
                                        .map(this::convertToDto)
                                        .collect(toList());
                                return new GroupedListDto<>(groupStudy.getKey(), loadDtoList);
                            })
                            .collect(toList());

                    return new GroupedListDto<>(discipline.getKey(), groupedListDtoStream);
                })
                .collect(toList());

        return ResponseEntity.ok(result);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<PersonalLoadDto> getGroupLoad(@PathVariable("id") int id) {
//        Optional<PersonalLoad> personalLoad = groupLoadRepository.getById(id);
//        return personalLoad.isPresent() ? ResponseEntity.ok(groupLoadRepository.convertToDto(personalLoad.get())) : ResponseEntity.notFound().build();
//    }
//
//    @RequestMapping(value = "/update", method = RequestMethod.PUT,consumes = APPLICATION_JSON_UTF8_VALUE)
//    public ResponseEntity<PersonalLoadDto> updatePersonalLoad(@RequestBody PersonalLoadDto personalLoadDto){
//        PersonalLoad original = groupLoadRepository.convertFromDto(personalLoadDto);
//        groupLoadRepository.update(original);
//        return ResponseEntity.ok(personalLoadDto);
//    }
}
