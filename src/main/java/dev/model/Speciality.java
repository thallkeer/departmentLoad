package dev.model;

import javax.persistence.*;

@Entity
public class Speciality {
    private String code;
    private String specialityName;
    private int educationLevel;

    @Id
    @Column(name = "Code", nullable = false, length = 450)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Basic
    @Column(name = "SpecialityName", nullable = false, length = -1)
    public String getSpecialityName() {
        return specialityName;
    }

    public void setSpecialityName(String specialityName) {
        this.specialityName = specialityName;
    }

    @Basic
    @Column(name = "EducationLevel", nullable = false)
    public int getEducationLevel() {
        return educationLevel;
    }

    public void setEducationLevel(int educationLevel) {
        this.educationLevel = educationLevel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Speciality that = (Speciality) o;

        if (educationLevel != that.educationLevel) return false;
        if (code != null ? !code.equals(that.code) : that.code != null) return false;
        if (specialityName != null ? !specialityName.equals(that.specialityName) : that.specialityName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = code != null ? code.hashCode() : 0;
        result = 31 * result + (specialityName != null ? specialityName.hashCode() : 0);
        result = 31 * result + educationLevel;
        return result;
    }
}
