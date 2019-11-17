import React from "react";
import ActionsButtons from "../ActionsButtons";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks/useAxios";
import AddSpeciality from "./AddSpeciality";

export default function SpecialityList() {
  const entityName = "Speciality";
  const [entities, loading, addEntity, updateEntity, deleteEntity] = useAxios(
    "speciality"
  );
  const {
    isShowing,
    toggle,
    submitFunction,
    createEntity,
    editEntity,
    editableEntity
  } = useModal(updateEntity, addEntity);

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
          Add {entityName}
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>{entityName} code</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entities.map(e => (
              <tr key={e.code}>
                <td>{e.name}</td>
                <td>
                  <ActionsButtons
                    onEdit={() => editEntity(e)}
                    onDelete={() => deleteEntity(e.code, "code")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddSpeciality
          show={isShowing}
          handleClose={toggle}
          submitEntity={submitFunction}
          entity={editableEntity}
          entityName={entityName}
        />
      )}
    </Container>
  );
}
