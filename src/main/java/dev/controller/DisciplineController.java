package dev.controller;

import dev.model.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/discipline")
public class DisciplineController extends BaseController<Discipline> {

    public DisciplineController(JpaRepository<Discipline, Integer> entityRepository) {
        super(entityRepository);
    }
}
