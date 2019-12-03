import React from "react";
import { Form } from "react-bootstrap";
import { useAddForm, useAxios } from "../../hooks";
import SelectList from "../SelectList";

const initialState = {
  groupNumber: "",
  speciality: {
    code: ""
  },
  studentsCount: 1
};

export default function AddGroup({
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
    handleClose,
    entity !== null
  );

  const [specialities] = useAxios("speciality");

  console.log(specialities);

  formState.speciality = specialities[0];

  const getFormBody = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>{entityName} number</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder={`Enter ${lowerName} number`}
            name="groupNumber"
            value={formState.groupNumber}
            onChange={handleInputChange}
            pattern="^([0-9]{4})+$"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Speciality</Form.Label>
          <SelectList
            items={specialities}
            dataTextField={"specialityName"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.speciality.code}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Student count</Form.Label>
          <input
            type="number"
            className="form-control"
            min={1}
            max={30}
            value={formState.studentsCount}
            onChange={handleInputChange}
            name="studentsCount"
          />
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
