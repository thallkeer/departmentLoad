package dev.dto;

import dev.model.GroupLoad;

public class GroupLoadDto {
    private int ID;
    private int teacherID;
    private String teacherFullName;
    private String groupNumber;
    private String semester;
    private String studyType;
    private int volumeHours;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }

    public String getTeacherFullName() {
        return teacherFullName;
    }

    public void setTeacherFullName(String teacherFullName) {
        this.teacherFullName = teacherFullName;
    }

    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }

    public int getVolumeHours() {
        return volumeHours;
    }

    public void setVolumeHours(int volumeHours) {
        this.volumeHours = volumeHours;
    }

    public String toString(){
        return  ID + " " + teacherFullName + " " + groupNumber + " " + volumeHours;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(GroupLoad.SemesterType semester) {
        this.semester = semester.label;
    }

    public String getStudyType() {
        return studyType;
    }

    public void setStudyType(GroupLoad.StudyTypes studyType) {
        this.studyType = studyType.label;
    }
}
