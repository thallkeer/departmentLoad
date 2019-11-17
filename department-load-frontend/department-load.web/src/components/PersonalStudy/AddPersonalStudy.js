import React from "react";
import { Form } from "react-bootstrap";
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
    getFormComponent,
    handleInputChange,
    lowerName
  } = useAddForm(
    personalStudy || initialState,
    personalStudyName,
    submitPersonalStudy,
    show,
    handleClose
  );

  const getFormBody = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>{personalStudyName} Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder={`Enter ${lowerName} name`}
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
      </>
    );
  };

  return getFormComponent(getFormBody);
}
