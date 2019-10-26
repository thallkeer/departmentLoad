package dev.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PositionID", nullable = false)
    private int positionId;
    @Basic
    @Column(name = "PositionName", nullable = false, length = 450)
    private String positionName;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "position")
    @JsonBackReference
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Teacher> teachers;

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Position that = (Position) o;

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
}
