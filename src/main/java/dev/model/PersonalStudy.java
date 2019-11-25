package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class PersonalStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IndividualClassID", nullable = false)
    private int ID;
    @Basic
    @Column(name = "IndividualClassName", nullable = false, length = 450)
    private String individualClassName;
    @Basic
    @Column(name = "VolumeByPerson", nullable = false)
    private int volumeByPerson;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonalStudy that = (PersonalStudy) o;

        if (ID != that.ID) return false;
        if (volumeByPerson != that.volumeByPerson) return false;
        return Objects.equals(individualClassName, that.individualClassName);
    }

    @Override
    public int hashCode() {
        int result = ID;
        result = 31 * result + (individualClassName != null ? individualClassName.hashCode() : 0);
        result = 31 * result + volumeByPerson;
        return result;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }


    public String getIndividualClassName() {
        return individualClassName;
    }

    public void setIndividualClassName(String individualClassName) {
        this.individualClassName = individualClassName;
    }


    public int getVolumeByPerson() {
        return volumeByPerson;
    }

    public void setVolumeByPerson(int volumeByPerson) {
        this.volumeByPerson = volumeByPerson;
    }
}
