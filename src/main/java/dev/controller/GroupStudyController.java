package dev.controller;

import dev.model.GroupStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/groupStudy")
public class GroupStudyController extends BaseController<GroupStudy> {

    public GroupStudyController(JpaRepository<GroupStudy, Integer> entityRepository) {
        super(entityRepository);
    }
}
