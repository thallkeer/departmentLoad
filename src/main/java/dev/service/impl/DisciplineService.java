package dev.service.impl;

import dev.model.Discipline;
import dev.repository.DisciplineRepository;
import dev.service.IService;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class DisciplineService implements IService<Discipline> {
    private final DisciplineRepository disciplineRepository;

    public DisciplineService(DisciplineRepository disciplineRepository) {
        this.disciplineRepository = disciplineRepository;
    }

    @Override
    public List<Discipline> getAll() {
        return disciplineRepository.findAll();
    }

    @Override
    public List<Discipline> get() {
        return null;
    }

    @Override
    public Optional<Discipline> getById(int id) {
        return disciplineRepository.findById(id);
    }

    @Override
    public Discipline add(Discipline entity) {
        return disciplineRepository.saveAndFlush(entity);
    }

    @Override
    public Discipline update(Discipline entity) {
        return disciplineRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(Discipline entity) {
        disciplineRepository.delete(entity);
    }

    @Override
    public void delete(int id) {
        disciplineRepository.deleteById(id);
    }
}
