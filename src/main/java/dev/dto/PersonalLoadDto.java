package dev.dto;

import dev.model.PersonalStudy;

public class PersonalLoadDto {
    private int ID;
    private int studentsCount;
    private String teacherFullName;
    private int teacherID;
    private PersonalStudy personalStudy;

    public PersonalLoadDto() {}

    public PersonalLoadDto(int personalLoadID, int studentCount, String teacherFullName, int teacherID, PersonalStudy personalStudy) {
        this.ID = personalLoadID;
        this.studentsCount = studentCount;
        this.teacherFullName = teacherFullName;
        this.teacherID = teacherID;
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

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public PersonalStudy getPersonalStudy() {
        return personalStudy;
    }

    public void setPersonalStudy(PersonalStudy personalStudy) {
        this.personalStudy = personalStudy;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }
}
