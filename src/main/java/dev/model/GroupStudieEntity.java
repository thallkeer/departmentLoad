package dev.model;

import javax.persistence.*;

@Entity
@Table(name = "GroupStudies", schema = "dbo", catalog = "DepartmentLoad")
public class GroupStudieEntity {
    private int groupClassId;
    private String groupClassName;

    @Id
    @Column(name = "GroupClassID", nullable = false)
    public int getGroupClassId() {
        return groupClassId;
    }

    public void setGroupClassId(int groupClassId) {
        this.groupClassId = groupClassId;
    }

    @Basic
    @Column(name = "GroupClassName", nullable = false, length = 450)
    public String getGroupClassName() {
        return groupClassName;
    }

    public void setGroupClassName(String groupClassName) {
        this.groupClassName = groupClassName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        GroupStudieEntity that = (GroupStudieEntity) o;

        if (groupClassId != that.groupClassId) return false;
        if (groupClassName != null ? !groupClassName.equals(that.groupClassName) : that.groupClassName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = groupClassId;
        result = 31 * result + (groupClassName != null ? groupClassName.hashCode() : 0);
        return result;
    }
}
