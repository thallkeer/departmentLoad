package dev.controller;

import dev.model.Position;
import dev.service.impl.PositionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/position")
public class PositionController {
    private final PositionService positionService;

    public PositionController(PositionService teacherService) {
        this.positionService = teacherService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Position>> getPositions(){
        return ResponseEntity.ok(positionService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Position> getPosition(@PathVariable("id") int id){
        Optional<Position> position = positionService.getById(id);
        return position.isPresent() ? ResponseEntity.ok(position.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Position> addPosition(@RequestBody Position position){
        return ResponseEntity.ok(positionService.add(position));
    }

    @PutMapping("/update")
    public ResponseEntity<Position> updatePosition(@RequestBody Position position){
        return ResponseEntity.ok(positionService.add(position));
    }

    @DeleteMapping("/delete/{id}")
    public void deletePosition(@PathVariable("id") int id){
        positionService.delete(id);
    }
}
