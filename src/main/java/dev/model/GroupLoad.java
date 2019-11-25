package dev.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class GroupLoad {

    public enum SemesterType {
        FALL_SEMESTER,
        SPRING_SEMESTER
    }

    public enum StudyTypes {
        FULL_TIME,
        CORRESPONDENCE_COURSE,
        EVENING
    }

    @Basic
    @Column(name = "VolumeHours", nullable = false)
    private int volumeHours;
    @Basic
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(name = "Semester", nullable = false, length = 60)
    private SemesterType semester;
    @Basic
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(name = "StudyType", nullable = false, length = 60)
    private StudyTypes studyType;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GroupLoad groupLoad = (GroupLoad) o;
        return volumeHours == groupLoad.volumeHours &&
                studyYear == groupLoad.studyYear &&
                ID == groupLoad.ID &&
                semester == groupLoad.semester &&
                studyType == groupLoad.studyType &&
                teacher.equals(groupLoad.teacher) &&
                discipline.equals(groupLoad.discipline) &&
                group.equals(groupLoad.group) &&
                groupStudy.equals(groupLoad.groupStudy);
    }

    @Override
    public int hashCode() {
        return Objects.hash(volumeHours, semester, studyType, studyYear, teacher, discipline, group, groupStudy, ID);
    }

    @Override
    public String toString() {
        return "GroupLoad{" +
                "volumeHours=" + volumeHours +
                ", semester=" + semester +
                ", studyType=" + studyType +
                ", studyYear=" + studyYear +
                ", teacher=" + teacher +
                ", discipline=" + discipline +
                ", group=" + group +
                ", groupStudy=" + groupStudy +
                ", ID=" + ID +
                '}';
    }

    public GroupLoad() {
    }

    public GroupLoad(int volumeHours, SemesterType semester, StudyTypes studyType, int studyYear, Teacher teacher, Discipline discipline, StudyGroup group, GroupStudy groupStudy) {
        this.volumeHours = volumeHours;
        this.semester = semester;
        this.studyType = studyType;
        this.studyYear = studyYear;
        this.teacher = teacher;
        this.discipline = discipline;
        this.group = group;
        this.groupStudy = groupStudy;
    }

    public int getVolumeHours() {
        return volumeHours;
    }

    public void setVolumeHours(int volumeHours) {
        this.volumeHours = volumeHours;
    }

    public SemesterType getSemester() {
        return semester;
    }

    public void setSemester(SemesterType semester) {
        this.semester = semester;
    }

    public StudyTypes getStudyType() {
        return studyType;
    }

    public void setStudyType(StudyTypes studyType) {
        this.studyType = studyType;
    }

    public int getStudyYear() {
        return studyYear;
    }

    public void setStudyYear(int studyYear) {
        this.studyYear = studyYear;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Discipline getDiscipline() {
        return discipline;
    }

    public void setDiscipline(Discipline discipline) {
        this.discipline = discipline;
    }

    public StudyGroup getGroup() {
        return group;
    }

    public void setGroup(StudyGroup group) {
        this.group = group;
    }

    public GroupStudy getGroupStudy() {
        return groupStudy;
    }

    public void setGroupStudy(GroupStudy groupStudy) {
        this.groupStudy = groupStudy;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }
}