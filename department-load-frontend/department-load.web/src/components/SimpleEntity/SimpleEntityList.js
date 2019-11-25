import React from "react";
import ActionsButtons from "../ActionsButtons";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks/useAxios";
import AddSimpleEntity from "../Forms/AddSimpleEntity";

export default function SimpleEntityList(props) {
  const { url, entityName } = props;
  const [entities, loading, addEntity, updateEntity, deleteEntity] = useAxios(
    url
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
        <Table striped hover responsive>
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
                    onEdit={() => editEntity(e)}
                    onDelete={() => deleteEntity(e.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddSimpleEntity
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
