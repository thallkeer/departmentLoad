import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm } from "../../hooks";
import { useUser } from "../../hooks/useUser";

const initialState = {
  username: "",
  password: ""
};

export default function AddSimpleEntity() {
  const { formState, handleInputChange } = useAddForm(initialState);
  const { register } = useUser();

  return (
    <div>
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
    </div>
  );
}
