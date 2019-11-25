import React from "react";
import Button from "react-bootstrap/Button";
import { FaPen, FaTrash } from "react-icons/fa";

export default function ActionsButtons({ onEdit, onDelete }) {
  return (
    <>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="success"
        onClick={onEdit}
      >
        <FaPen />
      </Button>
      <Button
        size="sm"
        floating="true"
        color="white"
        variant="danger"
        onClick={onDelete}
        style={{ marginLeft: "5px" }}
      >
        <FaTrash />
      </Button>
    </>
  );
}
