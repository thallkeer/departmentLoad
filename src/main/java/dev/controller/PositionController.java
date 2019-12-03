package dev.controller;

import dev.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/position")
public class PositionController extends BaseController<Position,Integer> {
    public PositionController(JpaRepository<Position, Integer> entityRepository) {
        super(entityRepository);
    }
}
