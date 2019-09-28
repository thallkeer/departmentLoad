package dev.controller;

import dev.model.TeacherEntity;
import dev.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/teachers")
public class TeacherController {

    @Autowired
    private ITeacherService teacherService;

    @GetMapping(value = "/all")
    public List<TeacherEntity> getAllTeachers(){
        return teacherService.getAll();
    }
}
