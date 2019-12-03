import React from "react";
import { Form } from "react-bootstrap";
import { useAxios, useAddForm } from "../../hooks/index";
import { getById } from "../../hooks/useAxios";
import SelectList from "../SelectList";

class GroupLoad {
  constructor() {
    this.id = 0;
    this.teacherID = 0;
    this.groupNumber = "";
    this.semester = 0;
    this.studyType = 0;
    this.volumeHours = 0;
    this.groupStudyID = 0;
    this.discipline = 0;
  }

  setFromOther = function(groupLoad) {
    this.id = groupLoad.id;
    this.teacherID = groupLoad.teacherID;
    this.groupNumber = groupLoad.groupNumber;
    this.semester = groupLoad.semester;
    this.studyType = groupLoad.studyType;
    this.volumeHours = groupLoad.volumeHours;
    this.groupStudyID = groupLoad.groupStudyID;
    this.disciplineID = groupLoad.disciplineID;
  };
}

export default function AddGroupLoad({
  show,
  handleClose,
  submitGroupLoad,
  groupLoadID,
  groupLoadName,
  groupStudies,
  teachers,
  groups
}) {
  const groupLoad =
    groupLoadID == null
      ? new GroupLoad()
      : new GroupLoad().setFromOther(getById(groupLoadID));

  const { formState, getFormComponent, handleInputChange } = useAddForm(
    groupLoad,
    groupLoadName,
    submitGroupLoad,
    show,
    handleClose
  );

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
          <Form.Label>Group study</Form.Label>
          <SelectList
            items={groupStudies}
            dataTextField={"name"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.groupStudyID}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Group</Form.Label>
          <SelectList
            items={groups}
            dataTextField={"groupNumber"}
            onChangeHandler={handleInputChange}
            selectedValue={formState.groupStudyID}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Volume hours</Form.Label>
          <input
            type="number"
            className="form-control"
            min={1}
            max={32}
            value={formState.volumeHours}
            onChange={handleInputChange}
            name="volumeHours"
          />
          >
        </Form.Group>
      </>
    );
  };

  return getFormComponent(getFormBody);
}
