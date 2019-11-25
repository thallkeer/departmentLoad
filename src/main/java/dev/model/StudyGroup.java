package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class StudyGroup {
    @Id
    @Column(name = "GroupNumber", nullable = false, length = 450)
    private String groupNumber;
    @Basic
    @Column(name = "StudentsCount", nullable = false)
    private int studentsCount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "speciality_code")
    private Speciality speciality;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StudyGroup that = (StudyGroup) o;

        if (studentsCount != that.studentsCount) return false;
        if (!Objects.equals(groupNumber, that.groupNumber)) return false;
        return Objects.equals(speciality, that.speciality);
    }

    @Override
    public int hashCode() {
        int result = groupNumber != null ? groupNumber.hashCode() : 0;
        result = 31 * result + studentsCount;
        result = 31 * result + (speciality != null ? speciality.hashCode() : 0);
        return result;
    }

    public StudyGroup() {
    }

    public StudyGroup(String groupNumber, int studentsCount, Speciality speciality) {
        this.groupNumber = groupNumber;
        this.studentsCount = studentsCount;
        this.speciality = speciality;
    }

    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }


    public int getStudentsCount() {
        return studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }

    public Speciality getSpeciality() {
        return speciality;
    }

    public void setSpeciality(Speciality speciality) {
        this.speciality = speciality;
    }
}
