package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Discipline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DisciplineID", nullable = false)
    private int ID;
    @Basic
    @Column(name = "DisciplineName", nullable = false, length = 450)
    private String name;


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

    @Override
    public String toString() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Discipline that = (Discipline) o;

        if (ID != that.ID) return false;
        if (!Objects.equals(name, that.name))
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ID;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
