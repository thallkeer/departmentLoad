package dev.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Positions", schema = "dbo", catalog = "DepartmentLoad")
public class Position {
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

        Position position = (Position) o;

        if (positionId != position.positionId) return false;
        if (!Objects.equals(positionName, position.positionName))
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = positionId;
        result = 31 * result + (positionName != null ? positionName.hashCode() : 0);
        return result;
    }
}
