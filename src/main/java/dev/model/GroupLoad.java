package dev.model;

import javax.persistence.*;

@Entity
public class GroupLoad {
    @Basic
    @Column(name = "VolumeHours", nullable = false)
    private int volumeHours;
    @Basic
    @Column(name = "Semester", nullable = false)
    private int semester;
    @Basic
    @Column(name = "StudyType", nullable = false)
    private int studyType;
    @Basic
    @Column(name = "StudyYear", nullable = false)
    private int studyYear;
    @Basic
    @Column(name = "TeacherID", nullable = false)
    private int teacherId;
    @Basic
    @Column(name = "DisciplineID", nullable = false)
    private int disciplineId;
    @Basic
    @Column(name = "GroupNumber", nullable = false, length = 450)
    private String groupNumber;
    @Basic
    @Column(name = "GroupStudiesID", nullable = false)
    private int groupStudiesId;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GroupLoadID", nullable = false)
    private int ID;

    public int getVolumeHours() {
        return volumeHours;
    }

    public void setVolumeHours(int volumeHours) {
        this.volumeHours = volumeHours;
    }


    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }


    public int getStudyType() {
        return studyType;
    }

    public void setStudyType(int studyType) {
        this.studyType = studyType;
    }

    public int getStudyYear() {
        return studyYear;
    }

    public void setStudyYear(int studyYear) {
        this.studyYear = studyYear;
    }


    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public int getDisciplineId() {
        return disciplineId;
    }

    public void setDisciplineId(int disciplineId) {
        this.disciplineId = disciplineId;
    }

    @Basic
    @Column(name = "GroupNumber", nullable = false, length = 450)
    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }

    @Basic
    @Column(name = "GroupStudiesID", nullable = false)
    public int getGroupStudiesId() {
        return groupStudiesId;
    }

    public void setGroupStudiesId(int groupStudiesId) {
        this.groupStudiesId = groupStudiesId;
    }

    @Id
    @Column(name = "GroupLoadID", nullable = false)
    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GroupLoad that = (GroupLoad) o;

        if (volumeHours != that.volumeHours) return false;
        if (semester != that.semester) return false;
        if (studyType != that.studyType) return false;
        if (studyYear != that.studyYear) return false;
        if (teacherId != that.teacherId) return false;
        if (disciplineId != that.disciplineId) return false;
        if (groupStudiesId != that.groupStudiesId) return false;
        if (ID != that.ID) return false;
        if (groupNumber != null ? !groupNumber.equals(that.groupNumber) : that.groupNumber != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = volumeHours;
        result = 31 * result + semester;
        result = 31 * result + studyType;
        result = 31 * result + studyYear;
        result = 31 * result + teacherId;
        result = 31 * result + disciplineId;
        result = 31 * result + (groupNumber != null ? groupNumber.hashCode() : 0);
        result = 31 * result + groupStudiesId;
        result = 31 * result + ID;
        return result;
    }
}