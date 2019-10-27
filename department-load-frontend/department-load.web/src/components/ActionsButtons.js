import React, { useContext } from "react";
import { ActionsContext } from "../context/TeachersListContext";
import Button from "react-bootstrap/Button";

export default function ActionsButtons() {
  const { onEdit, onDelete, id } = useContext(ActionsContext);

  return (
    <div>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="success"
        onClick={() => onEdit(id)}
      >
        Edit
      </Button>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="danger"
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
    </div>
  );
}
