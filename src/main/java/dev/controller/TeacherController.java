package dev.controller;

import dev.model.TeacherEntity;
import dev.repository.impl.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeacherController {

    @Autowired
    private TestRepository testRepository;

    @GetMapping(value = "/all")
    public List<TeacherEntity> getAllTeachers(){
        List<TeacherEntity> teachers = testRepository.getAll();
        return teachers;
    }
}
