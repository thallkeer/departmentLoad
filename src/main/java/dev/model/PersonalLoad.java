package dev.model;

import javax.persistence.*;

@Entity
public class PersonalLoad {
    @Basic
    @Column(name = "StudentsCount", nullable = false)
    private int studentsCount;
    @ManyToOne
    @JoinColumn(name = "Teacher_ID", nullable = false)
    private Teacher teacher;
    @ManyToOne
    @JoinColumn(name = "IndividualClass_ID", nullable = false)
    private PersonalStudy personalStudy;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PersonalLoadID", nullable = false)
    private int personalLoadID;

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public PersonalStudy getPersonalStudy() {
        return personalStudy;
    }

    public void setPersonalStudy(PersonalStudy personalStudy) {
        this.personalStudy = personalStudy;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonalLoad that = (PersonalLoad) o;

        if (studentsCount != that.studentsCount) return false;
        if (teacher != that.teacher) return false;
        if (personalStudy != that.personalStudy) return false;
        return personalLoadID == that.personalLoadID;
    }

    @Override
    public int hashCode() {
        int result = studentsCount;
        result = 31 * result + teacher.hashCode();
        result = 31 * result + personalStudy.hashCode();
        result = 31 * result + personalLoadID;
        return result;
    }
}
