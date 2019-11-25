package dev.controller;

import dev.model.PersonalStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/personalStudy")
public class PersonalStudyController extends BaseController<PersonalStudy> {

    public PersonalStudyController(JpaRepository<PersonalStudy, Integer> entityRepository) {
        super(entityRepository);
    }
}
