import React from "react";
import Button from "react-bootstrap/Button";

export default function ActionsButtons(props) {
  const { onEdit, onDelete } = props;
  return (
    <div>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="success"
        onClick={onEdit}
        style={{ marginRight: "5px" }}
      >
        Edit
      </Button>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="danger"
        onClick={onDelete}
      >
        Delete
      </Button>
    </div>
  );
}
