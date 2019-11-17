package dev.service.impl;

import dev.dto.PersonalLoadDto;
import dev.dto.PersonalLoadListDto;
import dev.model.PersonalLoad;
import dev.repository.PersonalLoadRepository;
import dev.repository.TeacherRepository;
import dev.service.IService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class PersonalLoadService implements IService<PersonalLoad> {
    private final PersonalLoadRepository personalLoadRepository;
    private final TeacherRepository teacherRepository;
    @Autowired
    private ModelMapper modelMapper;

    public PersonalLoadService(PersonalLoadRepository personalLoadRepository, TeacherRepository teacherRepository) {
        this.personalLoadRepository = personalLoadRepository;
        this.teacherRepository = teacherRepository;
    }

    public PersonalLoadDto convertToDto(PersonalLoad load)    {
        PersonalLoadDto personalLoadDto = modelMapper.map(load, PersonalLoadDto.class);
        personalLoadDto.setTeacherFullName(load.getTeacher().getFullName());
        return personalLoadDto;
    }

    public PersonalLoad convertFromDto(PersonalLoadDto personalLoadDto){
        PersonalLoad personalLoad = modelMapper.map(personalLoadDto, PersonalLoad.class);
        return personalLoad;
    }

    public List<PersonalLoadListDto> getGroupedLoads() {
        Stream<PersonalLoadDto> dtos = personalLoadRepository.findAll().stream().map(this::convertToDto);
        Map<String, List<PersonalLoadDto>> grouped = dtos.collect(Collectors.groupingBy(PersonalLoadDto::getTeacherFullName));
        return grouped.entrySet().stream().map(e -> new PersonalLoadListDto(e.getKey(),e.getValue())).collect(Collectors.toList());
    }

    @Override
    public List<PersonalLoad> getAll() {
        return  personalLoadRepository.findAll();
    }

    @Override
    public List<PersonalLoad> get() {
        return null;
    }

    @Override
    public Optional<PersonalLoad> getById(int id) {
        return personalLoadRepository.findById(id);
    }

    @Override
    public PersonalLoad add(PersonalLoad entity) {
        return personalLoadRepository.saveAndFlush(entity);
    }

    @Override
    public PersonalLoad update(PersonalLoad entity) {
        return personalLoadRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(PersonalLoad entity) {

    }

    @Override
    public void delete(int id) {
        personalLoadRepository.deleteById(id);
    }
}
