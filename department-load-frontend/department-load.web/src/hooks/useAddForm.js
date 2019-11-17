import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export const useAddForm = (model, modelName, onSubmit, show, handleClose) => {
  const [formState, setFormState] = useState(model);
  const isEditing = model.id !== 0;
  const title = isEditing ? `Edit ${modelName}` : `Add ${modelName}`;
  const submitBtnText = isEditing ? "Save changes" : "Submit";
  const lowerName = modelName.toLowerCase();

  const handleSubmit = () => {
    onSubmit(JSON.stringify(formState));
  };

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;

    const newState = { ...formState };
    setNestedKey(newState, name.split("."), value);

    setFormState({
      ...newState
    });
  };

  const setNestedKey = (obj, path, value) => {
    if (path.length === 1) {
      obj[path] = value;
      return;
    }
    return setNestedKey(obj[path[0]], path.slice(1), value);
  };

  const getFormComponent = formBody => {
    return (
      <Modal size="lg" show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{formBody()}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {submitBtnText}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  };

  return { formState, getFormComponent, handleInputChange, lowerName };
};
