import React, { useState } from "react";
import { ActionsContext } from "../../context/TeachersListContext";
import ActionsButtons from "../ActionsButtons";
import { Row, Container, Button, Table } from "react-bootstrap";
import useModal from "../../hooks/useModal";
import { useSimpleEntity } from "../../hooks/useSimpleEntity";

export default function SimpleEntityList(props) {
  const { url, entityName } = props;
  const { entities, addEntity, deleteEntity, updateEntity } = useSimpleEntity(
    url
  );
  const [editableEntity, setEditableEntity] = useState({});
  const [submitFunction, setSubmitFunction] = useState(null);
  const { isShowing, toggle } = useModal();

  const editEntity = id => {
    setEditableEntity(entities.find(e => e.id === id));
    setSubmitFunction(() => updateEntity);
    toggle();
  };

  const createEntity = () => {
    setEditableEntity(null);
    setSubmitFunction(() => addEntity);
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
          onClick={() => createEntity()}
        >
          Add {entityName}
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>{entityName} Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entities.map(e => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <ActionsButtons
                    onEdit={() => editEntity(e.id)}
                    onDelete={() => deleteEntity(e.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      {/* {isShowing && (
        <AddTeacher
          show={isShowing}
          handleClose={toggle}
          submitEntity={submitFunction}
          entity={editableEntity}
        />
      )} */}
    </Container>
  );
}
