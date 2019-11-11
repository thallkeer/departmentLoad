package dev.controller;

import dev.model.Position;
import dev.service.impl.PositionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

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

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Position> addPosition(@RequestBody Position position){
        return ResponseEntity.ok(positionService.add(position));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Position> updatePosition(@RequestBody Position position){
        return ResponseEntity.ok(positionService.update(position));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePosition(@PathVariable("id") int id){
        positionService.delete(id);
    }
}
