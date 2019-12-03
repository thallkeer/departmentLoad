package dev.controller;

import dev.dto.GroupedListDto;
import dev.model.StudyGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/group")
public class GroupController extends  BaseController<StudyGroup,String> {
    public GroupController(JpaRepository<StudyGroup, String> entityRepository) {
        super(entityRepository);
    }


    public ResponseEntity<List<?>> getAllGroups() {
        List<GroupedListDto> groupedListDtos = entityRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(StudyGroup::getSpeciality))
                .entrySet()
                .stream()
                .sorted(Comparator.comparing(g -> g.getKey().getSpecialityName()))
                .map(g ->
                        new GroupedListDto<>(g.getKey(),
                                g.getValue()
                                        .stream()
                                        .sorted(Comparator.comparing(StudyGroup::getGroupNumber))
                                        .collect(Collectors.toList())))
                .collect(Collectors.toList());

       return ResponseEntity.ok(groupedListDtos);
    }
}
