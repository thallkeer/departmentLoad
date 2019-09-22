package dev.model;

import javax.persistence.*;

@Entity
@Table(name = "Positions", schema = "dbo", catalog = "DepartmentLoad")
public class PositionsEntity {
    private int positionId;
    private String positionName;

    @Id
    @Column(name = "PositionID", nullable = false)
    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    @Basic
    @Column(name = "PositionName", nullable = false, length = 450)
    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PositionsEntity that = (PositionsEntity) o;

        if (positionId != that.positionId) return false;
        if (positionName != null ? !positionName.equals(that.positionName) : that.positionName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = positionId;
        result = 31 * result + (positionName != null ? positionName.hashCode() : 0);
        return result;
    }
}
