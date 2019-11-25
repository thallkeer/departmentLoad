package dev.model;

import javax.persistence.*;
import java.util.Objects;

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
    @ManyToOne
    @JoinColumn(name = "Teacher_ID", nullable = false)
    private Teacher teacher;
    @ManyToOne
    @JoinColumn(name = "DisciplineID", nullable = false)
    private Discipline discipline;
    @ManyToOne
    @JoinColumn(name = "GroupNumber", nullable = false)
    private StudyGroup group;
    @ManyToOne
    @JoinColumn(name = "GroupStudiesID", nullable = false)
    private GroupStudy groupStudy;
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

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Teacher getTeacher() {
        return teacher;
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
        if (teacher != that.teacher) return false;
        if (discipline != that.discipline) return false;
        if (groupStudy != that.groupStudy) return false;
        if (ID != that.ID) return false;
        return Objects.equals(group, that.group);
    }

    @Override
    public int hashCode() {
        int result = volumeHours;
        result = 31 * result + semester;
        result = 31 * result + studyType;
        result = 31 * result + studyYear;
        result = 31 * result + (teacher != null ? teacher.hashCode() : 0);
        result = 31 * result + (discipline != null ? discipline.hashCode() : 0);
        result = 31 * result + (group != null ? group.hashCode() : 0);
        result = 31 * result + (groupStudy != null ? groupStudy.hashCode() : 0);
        result = 31 * result + ID;
        return result;
    }


    public void setGroupStudy(GroupStudy groupStudy) {
        this.groupStudy = groupStudy;
    }

    public void setGroup(StudyGroup group) {
        this.group = group;
    }

    public StudyGroup getGroup() {
        return group;
    }

    public GroupStudy getGroupStudy() {
        return this.groupStudy;
    }

    public Discipline getDiscipline() {
        return discipline;
    }

    public void setDiscipline(Discipline discipline) {
        this.discipline = discipline;
    }
}