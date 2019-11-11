package dev.controller;

import dev.model.Discipline;
import dev.service.impl.DisciplineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/discipline")
public class DisciplineController {
    private final DisciplineService disciplineService;

    public DisciplineController(DisciplineService disciplineService) {
        this.disciplineService = disciplineService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Discipline>> getPositions(){
        return ResponseEntity.ok(disciplineService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Discipline> getPosition(@PathVariable("id") int id){
        Optional<Discipline> position = disciplineService.getById(id);
        return position.isPresent() ? ResponseEntity.ok(position.get()) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Discipline> addPosition(@RequestBody Discipline discipline){
        return ResponseEntity.ok(disciplineService.add(discipline));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Discipline> updatePosition(@RequestBody Discipline discipline){
        return ResponseEntity.ok(disciplineService.update(discipline));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePosition(@PathVariable("id") int id){
        disciplineService.delete(id);
    }
}
