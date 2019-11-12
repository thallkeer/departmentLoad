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
      >
        Edit
      </Button>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="danger"
        onClick={onDelete}
        style={{ marginLeft: "5px" }}
      >
        Delete
      </Button>
    </div>
  );
}
