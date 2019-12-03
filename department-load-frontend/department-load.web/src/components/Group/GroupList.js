import React from "react";
import ActionsButtons from "../ActionsButtons";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks/useAxios";
import AddGroup from "./AddGroup";

export default function SpecialityList() {
  const entityName = "Group";
  const [entities, loading, addEntity, updateEntity, deleteEntity] = useAxios(
    "group"
  );

  const {
    isShowing,
    toggle,
    submitFunction,
    createEntity,
    editEntity,
    editableEntity
  } = useModal(updateEntity, addEntity);

  const renderGroupHeader = speciality => {
    return (
      <tr key={speciality.specialityCode}>
        <th
          colSpan="5"
          style={{
            backgroundColor: "#ADD8E6",
            borderColor: "#dee2e6",
            textAlign: "left"
          }}
        >
          {speciality.specialityName}
        </th>
      </tr>
    );
  };

  const renderGrouped = groups => {
    return groups.map(g => (
      <tr key={g.groupNumber}>
        <td>{g.groupNumber}</td>
        <td>{g.studentsCount}</td>
        <td>
          <ActionsButtons
            onEdit={() => editEntity(g)}
            onDelete={() => deleteEntity(g.groupNumber, "groupNumber")}
          />
        </td>
      </tr>
    ));
  };

  const renderGroups = groups => {
    return groups.map(group => [
      renderGroupHeader(group.groupKey),
      renderGrouped(group.values)
    ]);
  };

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
              <th>{entityName} number</th>
              <th>Students count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderGroups(entities)}</tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddGroup
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
