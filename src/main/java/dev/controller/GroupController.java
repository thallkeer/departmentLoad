package dev.controller;

import dev.model.StudyGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/group")
public class GroupController extends  BaseController<StudyGroup> {
    public GroupController(JpaRepository<StudyGroup, Integer> entityRepository) {
        super(entityRepository);
    }
}
