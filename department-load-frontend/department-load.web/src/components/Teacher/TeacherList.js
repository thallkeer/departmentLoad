import React from "react";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import AddTeacher from "./AddTeacher";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks/useAxios";
import ActionsButtons from "../ActionsButtons";

export default function TeacherList() {
  const [positions] = useAxios("position");
  const [
    teachers,
    loading,
    addTeacher,
    updateTeacher,
    deleteTeacher
  ] = useAxios("teacher");

  const {
    isShowing,
    toggle,
    submitFunction,
    createEntity,
    editEntity,
    editableEntity
  } = useModal(updateTeacher, addTeacher);

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Container>
      <Row>
        <Button
          size="md"
          floating="true"
          variant="primary"
          style={{ marginBottom: "10px" }}
          onClick={() => createEntity()}
        >
          Add Teacher
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Patronym</th>
              <th>Position</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(t => (
              <tr key={t.id}>
                <td>{t.lastName}</td>
                <td>{t.firstName}</td>
                <td>{t.patronym}</td>
                <td>{t.position.name}</td>
                <td>
                  <ActionsButtons
                    onEdit={() => editEntity(t)}
                    onDelete={() => deleteTeacher(t.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddTeacher
          show={isShowing}
          handleClose={toggle}
          submitTeacher={submitFunction}
          positions={positions}
          teacher={editableEntity}
          teacherName="Teacher"
        />
      )}
    </Container>
  );
}
