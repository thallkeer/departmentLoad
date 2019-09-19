package dev.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class StudyGroup {
    private String groupNumber;
    private int studentsCount;
    private String specialityCode;

    @Id
    @Column(name = "GroupNumber", nullable = false, length = 450)
    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }

    @Basic
    @Column(name = "StudentsCount", nullable = false)
    public int getStudentsCount() {
        return studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }

    @Basic
    @Column(name = "SpecialityCode", nullable = false, length = 450)
    public String getSpecialityCode() {
        return specialityCode;
    }

    public void setSpecialityCode(String specialityCode) {
        this.specialityCode = specialityCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StudyGroup that = (StudyGroup) o;

        if (studentsCount != that.studentsCount) return false;
        if (!Objects.equals(groupNumber, that.groupNumber)) return false;
        if (!Objects.equals(specialityCode, that.specialityCode))
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = groupNumber != null ? groupNumber.hashCode() : 0;
        result = 31 * result + studentsCount;
        result = 31 * result + (specialityCode != null ? specialityCode.hashCode() : 0);
        return result;
    }
}
