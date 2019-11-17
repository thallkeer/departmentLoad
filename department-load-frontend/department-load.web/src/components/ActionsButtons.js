import React from "react";
import Button from "react-bootstrap/Button";

export default function ActionsButtons(onEdit, onDelete) {
  return (
    <>
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
    </>
  );
}
