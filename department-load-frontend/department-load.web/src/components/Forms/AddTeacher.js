import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm } from "../../hooks/index";

const initialState = {
  id: 0,
  firstName: "",
  lastName: "",
  patronym: "",
  position: {
    id: 0,
    name: ""
  }
};

export default function AddTeacher(props) {
  const {
    show,
    handleClose,
    submitTeacher,
    positions,
    teacher,
    teacherName
  } = props;

  const { formState, getFormComponent, handleInputChange } = useAddForm(
    teacher || initialState,
    teacherName,
    submitTeacher,
    show,
    handleClose
  );

  const getFormBody = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter first name"
            name="firstName"
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
            value={formState.lastName}
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
            value={formState.patronym}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            as="select"
            name="position.id"
            onChange={handleInputChange}
            value={formState.position.id}
          >
            {positions.map(pos => (
              <option key={pos.id} value={pos.id}>
                {pos.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
