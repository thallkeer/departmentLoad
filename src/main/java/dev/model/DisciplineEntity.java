package dev.model;

import javax.persistence.*;

@Entity
@Table(name = "Disciplines", schema = "dbo", catalog = "DepartmentLoad")
public class DisciplineEntity {
    private int disciplineId;
    private String disciplineName;

    @Id
    @Column(name = "DisciplineID", nullable = false)
    public int getDisciplineId() {
        return disciplineId;
    }

    public void setDisciplineId(int disciplineId) {
        this.disciplineId = disciplineId;
    }

    @Basic
    @Column(name = "DisciplineName", nullable = false, length = 450)
    public String getDisciplineName() {
        return disciplineName;
    }

    public void setDisciplineName(String disciplineName) {
        this.disciplineName = disciplineName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        DisciplineEntity that = (DisciplineEntity) o;

        if (disciplineId != that.disciplineId) return false;
        if (disciplineName != null ? !disciplineName.equals(that.disciplineName) : that.disciplineName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = disciplineId;
        result = 31 * result + (disciplineName != null ? disciplineName.hashCode() : 0);
        return result;
    }
}
