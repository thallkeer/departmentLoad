import React from "react";
import { Form } from "react-bootstrap";

export default function SelectList(
  items,
  dataTextField,
  onChangeHandler,
  selectedValue,
  label
) {
  return (
    <Form.Control
      as="select"
      value={selectedValue}
      onChange={onChangeHandler}
      style={{ marginTop: "5px" }}
    >
      <option value="0">Select {label}</option>
      {items.map(i => (
        <option key={i.id} value={i.id}>
          {i[dataTextField]}
        </option>
      ))}
    </Form.Control>
  );
}
