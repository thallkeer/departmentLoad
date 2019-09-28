package dev.model;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Positions", schema = "dbo", catalog = "DepartmentLoad")
public class PositionEntity {
    private int positionId;
    private String positionName;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "position")
    private List<TeacherEntity> teachers;

    @Id
    @Column(name = "PositionID", nullable = false)
    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    @Basic
    @Column(name = "PositionName", nullable = false, length = 450)
    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PositionEntity that = (PositionEntity) o;

        if (positionId != that.positionId) return false;
        if (!Objects.equals(positionName, that.positionName)) return false;
        return Objects.equals(teachers, that.teachers);
    }

    @Override
    public int hashCode() {
        int result = positionId;
        result = 31 * result + (positionName != null ? positionName.hashCode() : 0);
        result = 31 * result + teachers.hashCode();
        return result;
    }

    public List<TeacherEntity> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<TeacherEntity> teachers) {
        this.teachers = teachers;
    }
}
