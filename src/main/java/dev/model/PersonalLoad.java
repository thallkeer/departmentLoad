package dev.model;

import javax.persistence.*;

@Entity
public class PersonalLoad {
    private int studentsCount;
    private int teacherId;
    private int individualClassId;
    private int personalLoadId;

    @Basic
    @Column(name = "StudentsCount", nullable = false)
    public int getStudentsCount() {
        return studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }

    @Basic
    @Column(name = "TeacherID", nullable = false)
    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    @Basic
    @Column(name = "IndividualClassID", nullable = false)
    public int getIndividualClassId() {
        return individualClassId;
    }

    public void setIndividualClassId(int individualClassId) {
        this.individualClassId = individualClassId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PersonalLoadID", nullable = false)
    public int getPersonalLoadId() {
        return personalLoadId;
    }

    public void setPersonalLoadId(int personalLoadId) {
        this.personalLoadId = personalLoadId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonalLoad that = (PersonalLoad) o;

        if (studentsCount != that.studentsCount) return false;
        if (teacherId != that.teacherId) return false;
        if (individualClassId != that.individualClassId) return false;
        if (personalLoadId != that.personalLoadId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = studentsCount;
        result = 31 * result + teacherId;
        result = 31 * result + individualClassId;
        result = 31 * result + personalLoadId;
        return result;
    }
}
