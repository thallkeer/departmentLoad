import React, { useContext, useState } from "react";

export default function AddSimpleEntity(props) {
  const { show, handleClose, id, name } = props;

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
