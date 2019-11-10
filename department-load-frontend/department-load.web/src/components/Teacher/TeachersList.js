import React, { useState } from "react";
import { Row, Container, Button, Table } from "react-bootstrap";
import AddTeacher from "../Forms/AddTeacher";
import useModal from "../../hooks/useModal";
import { useSimpleEntity } from "../../hooks/useSimpleEntity";
import ActionsButtons from "../ActionsButtons";
import { useTeachers } from "../../hooks/useTeachers";

export default function TeacherList() {
  const { entities } = useSimpleEntity("position");
  const positions = entities;
  const { isShowing, toggle } = useModal();
  const { teachers, addTeacher, deleteTeacher, updateTeacher } = useTeachers();
  const [editableTeacher, setEditableTeacher] = useState({});
  const [submitFunction, setSubmitFunction] = useState(null);

  const editTeacher = id => {
    setEditableTeacher(teachers.find(t => t.teacherId === id));
    setSubmitFunction(() => updateTeacher);
    toggle();
  };

  const createTeacher = () => {
    setEditableTeacher(null);
    setSubmitFunction(() => addTeacher);
    toggle();
  };

  return (
    <Container>
      <Row>
        <Button
          size="md"
          floating="true"
          variant="primary"
          style={{ marginBottom: "10px" }}
          onClick={() => createTeacher()}
        >
          Add Teacher
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Patronym</th>
              <th>Position</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(t => (
              <tr key={t.teacherId}>
                <td>{t.firstName}</td>
                <td>{t.lastName}</td>
                <td>{t.patronym}</td>
                <td>{t.position.name}</td>
                <td>
                  <ActionsButtons
                    onEdit={() => editTeacher(t.teacherId)}
                    onDelete={() => deleteTeacher(t.teacherId)}
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
          teacher={editableTeacher}
        />
      )}
    </Container>
  );
}

{
  /* <BootstrapTable
striped
hover
keyField="teacherId"
data={teachersState.teachers}
columns={getColumns(arrToObject(positions), addActions)}
filter={filterFactory()}
/> */
}
