import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm } from "../../hooks";

const initialState = {
  id: 0,
  name: ""
};

export default function AddSimpleEntity({
  show,
  handleClose,
  submitEntity,
  entity,
  entityName
}) {
  const {
    formState,
    getFormComponent,
    handleInputChange,
    lowerName
  } = useAddForm(
    entity || initialState,
    entityName,
    submitEntity,
    show,
    handleClose
  );

  const getFormBody = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>{entityName} Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder={`Enter ${lowerName} name`}
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
