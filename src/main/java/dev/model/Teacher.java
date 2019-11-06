package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Teacher_ID", nullable = false)
    private int teacherId;
    @Basic
    @Column(name = "FirstName", nullable = false, length = 450)
    private String firstName;
    @Basic
    @Column(name = "LastName", nullable = false, length = 450)
    private String lastName;
    @Basic
    @Column(name = "Patronym", nullable = false, length = 450)
    private String patronym;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Position_ID")
    private Position position;

    public Teacher() {}

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPatronym() {
        return patronym;
    }

    public void setPatronym(String patronym) {
        this.patronym = patronym;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Teacher that = (Teacher) o;

        if (teacherId != that.teacherId) return false;
        if (!Objects.equals(position, that.position)) return false;
        if (!Objects.equals(firstName, that.firstName)) return false;
        if (!Objects.equals(lastName, that.lastName)) return false;
        return Objects.equals(patronym, that.patronym);
    }

    @Override
    public int hashCode() {
        int result = teacherId;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (patronym != null ? patronym.hashCode() : 0);
        result = 31 * result + (position != null ? position.hashCode() : 0);
        return result;
    }
}