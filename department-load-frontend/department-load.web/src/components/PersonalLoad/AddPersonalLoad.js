import React from "react";
import { Form } from "react-bootstrap";
import { useAxios, useAddForm } from "../../hooks/index";
import SelectList from "../SelectList";

export default function AddPersonalLoad({
  show,
  handleClose,
  submitPersonalLoad,
  personalLoad,
  personalLoadName,
  studyTypes
}) {
  const initialState = {
    id: 0,
    studentsCount: 1,
    teacherID: 0,
    personalStudy: {
      id: studyTypes[0].id.toString()
    }
  };

  const { formState, getFormComponent, handleInputChange } = useAddForm(
    personalLoad || initialState,
    personalLoadName,
    submitPersonalLoad,
    show,
    handleClose
  );

  const [teachers] = useAxios("teacher");

  const getFormBody = () => {
    return (
      <>
        <Form.Group>
          <Form.Label>Teacher</Form.Label>
          <SelectList
            items={teachers}
            dataTextField={"fullName"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.teacherID}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Study type</Form.Label>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.personalStudy.id}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Student count</Form.Label>
          <input
            type="number"
            className="form-control"
            min={1}
            max={20}
            value={formState.studentsCount}
            onChange={handleInputChange}
            name="studentsCount"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total load volume</Form.Label>
          <Form.Control
            as="input"
            readOnly
            value={
              formState.studentsCount *
              studyTypes.find(
                st => st.id.toString() === formState.personalStudy.id
              ).volumeByPerson
            }
          ></Form.Control>
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
