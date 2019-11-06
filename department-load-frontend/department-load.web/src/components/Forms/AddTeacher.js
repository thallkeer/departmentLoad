import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default function AddTeacher(props) {
  const initialState = {
    teacherId: 0,
    firstName: "",
    lastName: "",
    patronym: "",
    position: {
      positionId: 0,
      positionName: ""
    }
  };

  const { show, handleClose, submitTeacher, positions, teacher } = props;
  const [teacherState, setTeacherState] = useState(teacher || initialState);
  const isEditing = !Object.is(teacher, null);
  const title = isEditing ? "Edit teacher" : "Add teacher";
  const submitText = isEditing ? "Save changes" : "Submit";

  const submitForm = () => {
    submitTeacher(JSON.stringify(teacherState));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    const newState = { ...teacherState };
    setNestedKey(newState, name.split("."), value);

    setTeacherState({
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

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={submitForm}>
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
              name="firstName"
              value={teacherState.firstName}
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
              value={teacherState.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Patronym</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter patronym"
              name="patronym"
              value={teacherState.patronym}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              as="select"
              name="position.positionId"
              onChange={handleInputChange}
              value={teacherState.position.positionId}
            >
              {positions.map(pos => (
                <option key={pos.positionId} value={pos.positionId}>
                  {pos.positionName}
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
