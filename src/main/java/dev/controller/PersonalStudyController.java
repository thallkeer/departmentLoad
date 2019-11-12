package dev.controller;

import dev.model.PersonalStudy;
import dev.service.impl.PersonalStudyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/personalStudy")
public class PersonalStudyController {
    private final PersonalStudyService personalStudyService;

    public PersonalStudyController(PersonalStudyService personalStudyService) {
        this.personalStudyService = personalStudyService;
    }

    @GetMapping("/")
    public ResponseEntity<List<PersonalStudy>> getPersonalStudies(){
        return ResponseEntity.ok(personalStudyService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalStudy> getPersonalStudy(@PathVariable("id") int id){
        Optional<PersonalStudy> position = personalStudyService.getById(id);
        return position.isPresent() ? ResponseEntity.ok(position.get()) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<PersonalStudy> addPersonalStudy(@RequestBody PersonalStudy personalStudy){
        return ResponseEntity.ok(personalStudyService.add(personalStudy));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<PersonalStudy> updatePersonalStudy(@RequestBody PersonalStudy personalStudy){
        return ResponseEntity.ok(personalStudyService.update(personalStudy));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePersonalStudy(@PathVariable("id") int id){
        personalStudyService.delete(id);
    }
}
