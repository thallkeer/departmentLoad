package dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

public class BaseController<T> {
    @Autowired
    private final JpaRepository<T, Integer> entityRepository;

    public BaseController(JpaRepository<T, Integer> entityRepository) {
        this.entityRepository = entityRepository;
    }

    @GetMapping("/")
    public ResponseEntity<List<T>> getAll(){
        return ResponseEntity.ok(entityRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> getById(@PathVariable("id") int id){
        Optional<T> entity = entityRepository.findById(id);
        return entity.isPresent() ? ResponseEntity.ok(entity.get()) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<T> addEntity(@RequestBody T entity){
        return ResponseEntity.ok(entityRepository.saveAndFlush(entity));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<T> updateEntity(@RequestBody T position){
        return ResponseEntity.ok(entityRepository.saveAndFlush(position));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteEntity(@PathVariable("id") int id){
        entityRepository.deleteById(id);
    }
}
