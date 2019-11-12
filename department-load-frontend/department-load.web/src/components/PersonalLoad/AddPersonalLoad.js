import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useAddForm } from "../../hooks/useAddForm";
import { usePersonalStudies } from "../../hooks/usePersonalLoad";

const initialState = {
  personalLoadID: 0,
  studentsCount: 0,
  teacher: {
    teacherId: 0
  },
  personalStudy: {
    individualClassId: 0
  }
};

export default function AddPersonalLoad(props) {
  const {
    show,
    handleClose,
    submitPersonalLoad,
    personalLoad,
    personalLoadName
  } = props;

  const {
    formState,
    handleInputChange,
    handleSubmit,
    submitBtnText,
    title
  } = useAddForm(
    personalLoad || initialState,
    personalLoadName,
    submitPersonalLoad
  );
  const { studyTypes } = usePersonalStudies();

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              as="select"
              name="teacher.teacherId"
              onChange={handleInputChange}
              value={formState.teacher.teacherId}
            >
              {teachersSelect.map(t => (
                <option key={t.teacherId} value={t.teacherId}>
                  {t.fullName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Study type</Form.Label>
            <Form.Control
              as="select"
              name="personalStudy.individualClassId"
              onChange={handleInputChange}
              value={formState.personalStudy.individualClassId}
            >
              {studyTypes.map(type => (
                <option
                  key={type.individualClassId}
                  value={type.individualClassId}
                >
                  {type.individualClassName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Student count</Form.Label>
            <Form.Control
              as="range"
              name="studentsCount"
              value={
                formState.studentsCount * formState.personalStudy.volumeByPerson
              }
              min={0}
              max={20}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total load volume</Form.Label>
            <Form.Control
              as="select"
              name="position.id"
              onChange={handleInputChange}
              value={teacherState.position.id}
            >
              {positions.map(pos => (
                <option key={pos.id} value={pos.id}>
                  {pos.name}
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
            {submitBtnText}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
