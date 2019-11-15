import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useAddForm } from "../../hooks/index";

const initialState = {
  id: 0,
  individualClassName: "",
  volumeByPerson: 1
};

export default function AddPersonalStudy(props) {
  const {
    show,
    handleClose,
    submitPersonalStudy,
    personalStudy,
    personalStudyName
  } = props;

  const {
    formState,
    handleInputChange,
    handleSubmit,
    submitBtnText,
    title
  } = useAddForm(
    personalStudy || initialState,
    personalStudyName,
    submitPersonalStudy
  );

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>{personalStudyName} Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder={`Enter ${personalStudyName} name`}
              name="individualClassName"
              value={formState.individualClassName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Volume by person in hours</Form.Label>
            <input
              type="number"
              className="form-control"
              min={1}
              max={8}
              value={formState.volumeByPerson}
              onChange={handleInputChange}
              name="volumeByPerson"
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
