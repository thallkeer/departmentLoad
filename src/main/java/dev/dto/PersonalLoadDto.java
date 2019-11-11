package dev.dto;

public class PersonalLoadDto {
    private int personalLoadID;
    private int studentsCount;
    private String teacherFullName;
    private int studyTypeID;

    public PersonalLoadDto() {}

    public PersonalLoadDto(int personalLoadID, int studentCount, String teacherFullName, int studyTypeID) {
        this.personalLoadID = personalLoadID;
        this.studentsCount = studentCount;
        this.teacherFullName = teacherFullName;
        this.studyTypeID = studyTypeID;
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

    public int getStudyTypeID() {
        return studyTypeID;
    }

    public void setStudyTypeID(int studyTypeID) {
        this.studyTypeID = studyTypeID;
    }
}
