package dev.controller;

import dev.model.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/speciality")
public class SpecialityController extends BaseController<Speciality,String> {
    public SpecialityController(JpaRepository<Speciality, String> entityRepository) {
        super(entityRepository);
    }
}
