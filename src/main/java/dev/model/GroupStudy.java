package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class GroupStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GroupClassID", nullable = false)
    private int ID;
    @Basic
    @Column(name = "GroupClassName", nullable = false, length = 450)
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GroupStudy that = (GroupStudy) o;

        if (ID != that.ID) return false;
        return Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        int result = ID;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
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
}
