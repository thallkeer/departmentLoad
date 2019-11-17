package dev.controller;

import dev.dto.PersonalLoadDto;
import dev.dto.PersonalLoadListDto;
import dev.model.PersonalLoad;
import dev.service.impl.PersonalLoadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController
@RequestMapping(value = "/api/personalLoad")
public class PersonalLoadController {
    private final PersonalLoadService personalLoadService;

    public PersonalLoadController(PersonalLoadService personalLoadService) {
        this.personalLoadService = personalLoadService;
    }

    @GetMapping("/")
    public ResponseEntity<List<PersonalLoadListDto>> getAllPersonalLoads() {
        return ResponseEntity.ok(personalLoadService.getGroupedLoads());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalLoadDto> getPersonalLoad(@PathVariable("id") int id) {
        Optional<PersonalLoad> personalLoad = personalLoadService.getById(id);
        return personalLoad.isPresent() ? ResponseEntity.ok(personalLoadService.convertToDto(personalLoad.get())) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT,consumes = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<PersonalLoadDto> updatePersonalLoad(@RequestBody PersonalLoadDto personalLoadDto){
        PersonalLoad original = personalLoadService.convertFromDto(personalLoadDto);
        personalLoadService.update(original);
        return ResponseEntity.ok(personalLoadDto);
    }
}
