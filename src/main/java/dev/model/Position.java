package dev.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PositionID", nullable = false)
    private int ID;
    @Basic
    @Column(name = "PositionName", nullable = false, length = 450)
    private String name;
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "position")
    @JsonIgnore
    private List<Teacher> teachers;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Position that = (Position) o;

        if (ID != that.ID) return false;
        if (!Objects.equals(name, that.name)) return false;
        return Objects.equals(teachers, that.teachers);
    }

    @Override
    public int hashCode() {
        int result = ID;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + teachers.hashCode();
        return result;
    }

    public Position() {
    }

    public Position(String name, List<Teacher> teachers) {
        this.name = name;
        this.teachers = teachers;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
}
