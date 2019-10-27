import React, { useContext, useState } from "react";
import { Form, Button, Modal, Row, Col, Container } from "react-bootstrap";
import { useAddForm } from "../../hooks/useAddForm";
import { TeachersListContext } from "../../context/TeachersListContext";

export default function AddTeacher(props) {
  const { show, handleClose, teacher, positions } = props;
  const isEditing = !Object.is(teacher, null);
  if (!isEditing) {
    teacher = {
      firstName: "",
      lastName: "",
      patronym: "",
      position: {
        positionId: positions[0]
      }
    };
  }
  const title = isEditing ? "Edit teacher" : "Add teacher";
  const submitText = isEditing ? "Save changes" : "Submit";
  const { submitTeacher } = useContext(TeachersListContext);
  const [formState, setFormState] = useState(teacher);

  const submitForm = () => {
    submitTeacher(JSON.stringify(inputs));
  };

  const { inputs, handleInputChange, handleSubmit } = useAddForm(submitForm);

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter first name"
              name={formState.firstName}
              value={formState.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter last name"
              name="lastName"
              onChange={handleInputChange}
              value={inputs.lastName || ""}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Patronym</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter patronym"
              name="patronym"
              value={inputs.patronym || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              as="select"
              name="position"
              value={
                (isEditing &&
                  teacher.position &&
                  teacher.position.positionId) ||
                inputs.position ||
                ""
              }
              onChange={handleInputChange}
            >
              {Object.entries(positions).map(entry => (
                <option value={entry[0]} key={entry[0]}>
                  {entry[1]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {submitText}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
