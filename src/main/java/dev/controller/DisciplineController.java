package dev.controller;

import dev.model.Discipline;
import dev.service.impl.DisciplineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PostMapping("/add")
    public ResponseEntity<Discipline> addPosition(@RequestBody Discipline discipline){
        return ResponseEntity.ok(disciplineService.add(discipline));
    }

    @PutMapping("/update")
    public ResponseEntity<Discipline> updatePosition(@RequestBody Discipline discipline){
        return ResponseEntity.ok(disciplineService.update(discipline));
    }

    @DeleteMapping("/delete/{id}")
    public void deletePosition(@PathVariable("id") int id){
        disciplineService.delete(id);
    }
}
