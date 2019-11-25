import React from "react";
import { Form } from "react-bootstrap";

export default function SelectList({
  items,
  dataTextField,
  onChangeHandler,
  selectedValue,
  filterName,
  label,
  keyProperty
}) {
  const keyProp = keyProperty || "id";
  return (
    <Form.Control
      as="select"
      value={selectedValue}
      onChange={onChangeHandler}
      name={filterName}
      style={{ marginTop: "5px" }}
    >
      {label && <option value="0">Select {label}</option>}
      {items.map(i => (
        <option key={i[keyProp]} value={i[keyProp]}>
          {i[dataTextField]}
        </option>
      ))}
    </Form.Control>
  );
}
