package dev.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Teachers {
    private int teacherId;
    private String firstName;
    private String lastName;
    private String patronym;
    private int departmentId;
    private int positionId;

    @Id
    @Column(name = "TeacherID", nullable = false)
    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    @Basic
    @Column(name = "FirstName", nullable = false, length = 450)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "LastName", nullable = false, length = 450)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "Patronym", nullable = false, length = 450)
    public String getPatronym() {
        return patronym;
    }

    public void setPatronym(String patronym) {
        this.patronym = patronym;
    }

    @Basic
    @Column(name = "DepartmentID", nullable = false)
    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    @Basic
    @Column(name = "PositionID", nullable = false)
    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Teachers teachers = (Teachers) o;

        if (teacherId != teachers.teacherId) return false;
        if (departmentId != teachers.departmentId) return false;
        if (positionId != teachers.positionId) return false;
        if (!Objects.equals(firstName, teachers.firstName)) return false;
        if (!Objects.equals(lastName, teachers.lastName)) return false;
        if (!Objects.equals(patronym, teachers.patronym)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = teacherId;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (patronym != null ? patronym.hashCode() : 0);
        result = 31 * result + departmentId;
        result = 31 * result + positionId;
        return result;
    }
}
