package dev.service.impl;

import dev.model.Teacher;
import dev.repository.TeacherRepository;
import dev.service.IService;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class TeacherService implements IService<Teacher> {

    private final TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public List<Teacher> getAll() {
        return teacherRepository.findAll();
    }

    @Override
    public List<Teacher> get() {
        return null;
    }

    @Override
    public Optional<Teacher> getById(int id) {
        return teacherRepository.findById(id);
    }

    @Override
    public Teacher add(Teacher entity) {
        return teacherRepository.saveAndFlush(entity);
    }

    @Override
    public Teacher update(Teacher entity) {
        return teacherRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(Teacher entity) {

    }

    @Override
    public void delete(int id) {

    }
}
