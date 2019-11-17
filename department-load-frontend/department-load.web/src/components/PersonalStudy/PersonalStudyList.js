import React from "react";
import ActionsButtons from "../ActionsButtons";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks/useAxios";
import AddPersonalStudy from "../../components/PersonalStudy/AddPersonalStudy";

export default function PersonalStudy(props) {
  const [
    personalStudies,
    loading,
    addPersonalStudy,
    updatePersonalStudy,
    deletePersonalStudy
  ] = useAxios("personalStudy");

  const {
    isShowing,
    toggle,
    submitFunction,
    createEntity,
    editEntity,
    editableEntity
  } = useModal(updatePersonalStudy, addPersonalStudy);

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
          Add personal study
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Personal study name</th>
              <th>Volume by person, hours</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {personalStudies.map(ps => (
              <tr key={ps.id}>
                <td>{ps.individualClassName}</td>
                <td>{ps.volumeByPerson}</td>
                <td>
                  <ActionsButtons
                    onEdit={() => editEntity(ps)}
                    onDelete={() => deletePersonalStudy(ps.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddPersonalStudy
          show={isShowing}
          handleClose={toggle}
          submitPersonalStudy={submitFunction}
          personalStudy={editableEntity}
          personalStudyName="Personal study"
        />
      )}
    </Container>
  );
}
