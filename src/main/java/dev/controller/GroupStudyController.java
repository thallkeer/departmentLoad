package dev.controller;

import dev.model.GroupStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/groupStudy")
public class GroupStudyController extends BaseController<GroupStudy,Integer> {

    public GroupStudyController(JpaRepository<GroupStudy, Integer> entityRepository) {
        super(entityRepository);
    }
}
