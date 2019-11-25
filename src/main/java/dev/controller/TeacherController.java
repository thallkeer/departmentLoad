package dev.controller;

import dev.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/teacher")
public class TeacherController extends BaseController<Teacher> {

    public TeacherController(JpaRepository<Teacher, Integer> entityRepository) {
        super(entityRepository);
    }
}
