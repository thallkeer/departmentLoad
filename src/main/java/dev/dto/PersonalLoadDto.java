package dev.dto;

import dev.model.PersonalStudy;

public class PersonalLoadDto {
    private int personalLoadID;
    private int studentsCount;
    private String teacherFullName;
    private PersonalStudy personalStudy;

    public PersonalLoadDto() {}

    public PersonalLoadDto(int personalLoadID, int studentCount, String teacherFullName, PersonalStudy personalStudy) {
        this.personalLoadID = personalLoadID;
        this.studentsCount = studentCount;
        this.teacherFullName = teacherFullName;
        this.personalStudy = personalStudy;
    }


    public String getTeacherFullName() {
        return teacherFullName;
    }

    public void setTeacherFullName(String teacherFullName) {
        this.teacherFullName = teacherFullName;
    }

    public int getStudentsCount() {
        return studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }

    public int getPersonalLoadID() {
        return personalLoadID;
    }

    public void setPersonalLoadID(int personalLoadID) {
        this.personalLoadID = personalLoadID;
    }

    public PersonalStudy getPersonalStudy() {
        return personalStudy;
    }

    public void setPersonalStudy(PersonalStudy personalStudy) {
        this.personalStudy = personalStudy;
    }
}
