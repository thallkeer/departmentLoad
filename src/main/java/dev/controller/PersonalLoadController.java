package dev.controller;

import dev.dto.PersonalLoadListDto;
import dev.service.impl.PersonalLoadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/personalLoad")
public class PersonalLoadController {
    private final PersonalLoadService personalLoadService;

    public PersonalLoadController(PersonalLoadService teacherService) {
        this.personalLoadService = teacherService;
    }

    @GetMapping("/")
    public ResponseEntity<List<PersonalLoadListDto>> getAllPersonalLoads(){
        return ResponseEntity.ok(personalLoadService.getGroupedLoads());
    }
}
