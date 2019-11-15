package dev.model;

import javax.persistence.*;

@Entity
public class PersonalStudy {
    private int ID;
    private String individualClassName;
    private int volumeByPerson;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IndividualClassID", nullable = false)
    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    @Basic
    @Column(name = "IndividualClassName", nullable = false, length = 450)
    public String getIndividualClassName() {
        return individualClassName;
    }

    public void setIndividualClassName(String individualClassName) {
        this.individualClassName = individualClassName;
    }

    @Basic
    @Column(name = "VolumeByPerson", nullable = false)
    public int getVolumeByPerson() {
        return volumeByPerson;
    }

    public void setVolumeByPerson(int volumeByPerson) {
        this.volumeByPerson = volumeByPerson;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonalStudy that = (PersonalStudy) o;

        if (ID != that.ID) return false;
        if (volumeByPerson != that.volumeByPerson) return false;
        if (individualClassName != null ? !individualClassName.equals(that.individualClassName) : that.individualClassName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ID;
        result = 31 * result + (individualClassName != null ? individualClassName.hashCode() : 0);
        result = 31 * result + volumeByPerson;
        return result;
    }
}
