package dev.dto;

import java.util.List;

public class PersonalLoadListDto {
    private String teacher;
    private List<PersonalLoadDto> personalLoads;

    public PersonalLoadListDto(String teacher, List<PersonalLoadDto> loads){
        this.teacher = teacher;
        this.personalLoads = loads;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public List<PersonalLoadDto> getPersonalLoads() {
        return personalLoads;
    }

    public void setPersonalLoads(List<PersonalLoadDto> personalLoads) {
        this.personalLoads = personalLoads;
    }
}
