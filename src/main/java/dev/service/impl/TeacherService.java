package dev.service.impl;

import dev.model.Teacher;
import dev.repository.TeacherRepository;
import dev.service.IService;

import java.util.List;

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
    public Teacher getById(int id) {
        return null;
    }

    @Override
    public void add(Teacher entity) {

    }

    @Override
    public void update(Teacher entity) {

    }

    @Override
    public void delete(Teacher entity) {

    }

    @Override
    public void delete(int id) {

    }
}
