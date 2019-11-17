package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Speciality {
    private String code;
    private String specialityName;

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


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Speciality that = (Speciality) o;

        if (!Objects.equals(code, that.code)) return false;
        return Objects.equals(specialityName, that.specialityName);
    }

    @Override
    public int hashCode() {
        int result = code != null ? code.hashCode() : 0;
        result = 31 * result + (specialityName != null ? specialityName.hashCode() : 0);
        return result;
    }
}
