package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "PersonalStudies", schema = "dbo", catalog = "DepartmentLoad")
public class PersonalStudy {
    private int individualClassId;
    private String individualClassName;
    private int volumeByPerson;

    @Id
    @Column(name = "IndividualClassID", nullable = false)
    public int getIndividualClassId() {
        return individualClassId;
    }

    public void setIndividualClassId(int individualClassId) {
        this.individualClassId = individualClassId;
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

        if (individualClassId != that.individualClassId) return false;
        if (volumeByPerson != that.volumeByPerson) return false;
        if (!Objects.equals(individualClassName, that.individualClassName))
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = individualClassId;
        result = 31 * result + (individualClassName != null ? individualClassName.hashCode() : 0);
        result = 31 * result + volumeByPerson;
        return result;
    }
}
