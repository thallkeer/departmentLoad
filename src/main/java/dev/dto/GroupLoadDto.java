package dev.dto;

public class GroupLoadDto {
    private int ID;
    private int teacherID;
    private String teacherFullName;
    private String groupNumber;
    private int volumeHours;

    public GroupLoadDto(){}

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
}
