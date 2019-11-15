import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useSimpleEntity, useAddForm } from "../../hooks/index";

export default function AddPersonalLoad(props) {
  const {
    show,
    handleClose,
    submitPersonalLoad,
    personalLoad,
    personalLoadName,
    studyTypes
  } = props;

  const initialState = {
    id: 0,
    studentsCount: 1,
    teacher: {
      id: 0
    },
    personalStudy: {
      id: studyTypes[0].id
    }
  };

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

  const [teachers] = useSimpleEntity("teacher");

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
              name="teacher.id"
              onChange={handleInputChange}
              value={formState.teacher.id}
            >
              {teachers.map(t => (
                <option key={t.id} value={t.id}>
                  {t.fullName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Study type</Form.Label>
            <Form.Control
              as="select"
              name="personalStudy.id"
              onChange={handleInputChange}
              value={formState.personalStudy.id}
            >
              {studyTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.individualClassName}
                </option>
              ))}
            </Form.Control>
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
                studyTypes.find(st => st.id == formState.personalStudy.id)
                  .volumeByPerson
              }
            ></Form.Control>
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
