package dev.controller;

import dev.model.Teacher;
import dev.service.impl.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RestController
@RequestMapping(value = "/api/teacher")
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Teacher>> getAllTeachers(){
        return ResponseEntity.ok(teacherService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacher(@PathVariable("id") int id){
        Optional<Teacher> teacher = teacherService.getById(id);
        return teacher.isPresent() ? ResponseEntity.ok(teacher.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Teacher> addPosition(@RequestBody Teacher teacher){
        Teacher t = teacher;
        return ResponseEntity.ok(teacherService.add(teacher));
    }
}
