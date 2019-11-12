import React, { useState } from "react";
import {
  Row,
  Container,
  Col,
  Button,
  Table,
  FormControl
} from "react-bootstrap";
import ActionsButtons from "../ActionsButtons";
import {
  usePersonalLoad,
  usePersonalStudies
} from "../../hooks/usePersonalLoad";
import useModal from "../../hooks/useModal";
import AddPersonalLoad from "./AddPersonalLoad";

export default function PersonalLoadList() {
  const { studyTypes } = usePersonalStudies();
  const [selectedType, setSelectedType] = useState("");
  const { personalLoads, loading } = usePersonalLoad();
  const [filteredLoads, setFilteredLoads] = useState(null);
  const {
    isShowing,
    toggle,
    createEntity,
    editEntity,
    editableEntity,
    submitFunction
  } = useModal(null, null);

  const renderGroupHeader = group => {
    return (
      <tr key={group.teacher}>
        <th
          colSpan="5"
          style={{
            backgroundColor: "#ADD8E6",
            borderColor: "#dee2e6",
            textAlign: "left"
          }}
        >
          {group.teacher}
        </th>
      </tr>
    );
  };

  const renderGrouped = group => {
    return group.personalLoads.map(load => (
      <tr key={load.personalLoadID}>
        <td>{load.personalStudy.individualClassName}</td>
        <td>{load.studentsCount}</td>
        <td>{load.studentsCount * load.personalStudy.volumeByPerson}</td>
        <td>
          <ActionsButtons
            onEdit={() => console.log("Edit", load.personalLoadID)}
            onDelete={() => console.log("Delete", load.personalLoadID)}
          ></ActionsButtons>
        </td>
      </tr>
    ));
  };

  const renderGroups = groups => {
    return groups.map(group => [
      renderGroupHeader(group),
      renderGrouped(group)
    ]);
  };

  const handleFilterChange = e => {
    const id = e.target.value;
    setSelectedType(id);

    if (id === "0") setFilteredLoads(personalLoads);
    else {
      let loadsFiltered = JSON.parse(JSON.stringify(personalLoads));

      loadsFiltered.forEach(load => {
        const teacherLoads = load.personalLoads;
        const filtered = teacherLoads.filter(
          pl => pl.personalStudy.individualClassId.toString() === id
        );
        load.personalLoads = filtered.length === 0 ? null : filtered;
      });

      setFilteredLoads(loadsFiltered.filter(l => l.personalLoads));
    }
  };

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Button
            size="md"
            floating="true"
            variant="primary"
            style={{ marginBottom: "10px" }}
          >
            Add personal load
          </Button>
        </Col>
        <Col md={{ span: 4, offset: 6 }}>
          <FormControl
            as="select"
            value={selectedType}
            onChange={handleFilterChange}
          >
            <option value="0">Все</option>
            {studyTypes.map(t => (
              <option key={t.individualClassId} value={t.individualClassId}>
                {t.individualClassName}
              </option>
            ))}
          </FormControl>
        </Col>
      </Row>
      <Row>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Personal study name</th>
              <th>Student count</th>
              <th>Total volume</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>{renderGroups(filteredLoads || personalLoads)}</tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddPersonalLoad
          show={isShowing}
          handleClose={toggle}
          submitPersonalLoad={submitFunction}
          personalLoad={editableEntity}
          personalLoadName="Personal Load"
        />
      )}
    </Container>
  );
}
