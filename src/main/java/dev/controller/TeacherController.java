package dev.controller;

import dev.model.Teacher;
import dev.service.impl.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

//@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RestController
@RequestMapping(value = "/api/teacher")
public class TeacherController {
    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);
    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Teacher>> getAllTeachers(){
        return ResponseEntity.ok(teacherService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacher(@PathVariable("id") int id){
        Optional<Teacher> teacher = teacherService.getById(id);
        return teacher.isPresent() ? ResponseEntity.ok(teacher.get()) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher) {
        return ResponseEntity.ok(teacherService.add(teacher));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Teacher> updateTeacher(@RequestBody Teacher teacher){
        return ResponseEntity.ok(teacherService.update(teacher));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteTeacher(@PathVariable("id") int id){
        teacherService.delete(id);
    }
}
