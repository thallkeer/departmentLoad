import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm } from "../../hooks/index";
import SelectList from "../SelectList";

export default function AddTeacher({
  show,
  handleClose,
  submitTeacher,
  positions,
  teacher,
  teacherName
}) {
  const initialState = {
    id: 0,
    firstName: "",
    lastName: "",
    patronym: "",
    position: positions[0]
  };

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
          <SelectList
            items={positions}
            dataTextField={"name"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.position.id}
            filterName={"position.id"}
          />
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
