import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm } from "../../hooks";

const initialState = {
  code: "",
  specialityName: ""
};

export default function AddSpeciality({
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
          <Form.Label>{entityName} code</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder={`Enter ${lowerName} code`}
            name="code"
            value={formState.code}
            onChange={handleInputChange}
            pattern="^([0-9]{2}.[0-9]{2}.[0-9].)+$"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{entityName} name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder={`Enter ${lowerName} name`}
            name="specialityName"
            value={formState.specialityName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
