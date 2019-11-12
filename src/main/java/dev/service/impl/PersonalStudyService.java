package dev.service.impl;

import dev.model.PersonalStudy;
import dev.repository.PersonalStudyRepository;
import dev.service.IService;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class PersonalStudyService implements IService<PersonalStudy> {
    private final PersonalStudyRepository personalStudyRepository;

    public PersonalStudyService(PersonalStudyRepository personalStudyRepository) {
        this.personalStudyRepository = personalStudyRepository;
    }

    @Override
    public List<PersonalStudy> getAll() {
        return personalStudyRepository.findAll();
    }

    @Override
    public List<PersonalStudy> get() {
        return null;
    }

    @Override
    public Optional<PersonalStudy> getById(int id) {
        return personalStudyRepository.findById(id);
    }

    @Override
    public PersonalStudy add(PersonalStudy entity) {
        return personalStudyRepository.saveAndFlush(entity);
    }

    @Override
    public PersonalStudy update(PersonalStudy entity) {
        return personalStudyRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(PersonalStudy entity) {
        personalStudyRepository.delete(entity);
    }

    @Override
    public void delete(int id) {
        personalStudyRepository.deleteById(id);
    }
}
