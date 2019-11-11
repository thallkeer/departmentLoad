import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const initialState = {
  id: 0,
  name: ""
};

export default function AddSimpleEntity(props) {
  const { show, handleClose, submitEntity, entity, entityName } = props;
  const [formState, setFormState] = useState(entity || initialState);
  const isEditing = !Object.is(entity, null);
  const title = isEditing ? `Edit ${entityName}` : `Add ${entityName}`;
  const submitBtnText = isEditing ? "Save changes" : "Submit";
  const lowerName = entityName.toLowerCase();

  const submitForm = () => {
    submitEntity(JSON.stringify(formState));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={submitForm}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
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
}
