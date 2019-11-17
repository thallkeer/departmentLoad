import React, { useState } from "react";
import { Row, Container, Col, Button, Table, Spinner } from "react-bootstrap";
import ActionsButtons from "../ActionsButtons";
import useModal from "../../hooks/useModal";
import AddPersonalLoad from "./AddPersonalLoad";
import { useAxios } from "../../hooks";
import { SelectList } from ".././index";

export default function GroupLoadList() {
  const [studyTypes] = useAxios("groupStudies");
  const [selectedType, setSelectedType] = useState("");
  const [
    groupLoads,
    loading,
    addGroupLoad,
    updateGroupLoad,
    deleteGroupLoad
  ] = useAxios("groupLoad");
  const [filteredLoads, setFilteredLoads] = useState(null);
  const {
    isShowing,
    toggle,
    createEntity,
    editEntity,
    editableEntity,
    submitFunction
  } = useModal(updateGroupLoad, addGroupLoad);

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
      <tr key={load.id}>
        <td>{load.personalStudy.individualClassName}</td>
        <td>{load.studentsCount}</td>
        <td>{load.studentsCount * load.personalStudy.volumeByPerson}</td>
        <td>
          <ActionsButtons
            onEdit={() => editEntity(load)}
            onDelete={() => deleteGroupLoad(load.id)}
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

    if (id === "0") setFilteredLoads(groupLoads);
    else {
      let loadsFiltered = JSON.parse(JSON.stringify(groupLoads));

      loadsFiltered.forEach(load => {
        const teacherLoads = load.personalLoads;
        const filtered = teacherLoads.filter(
          pl => pl.personalStudy.id.toString() === id
        );
        load.personalLoads = filtered.length === 0 ? null : filtered;
      });

      setFilteredLoads(loadsFiltered.filter(l => l.personalLoads));
    }
  };

  const renderFiltersRow = () => {
    return (
      <tr style={{ backgroundColor: "white" }}>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedType}
            label={"study type"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedType}
            label={"study type"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedType}
            label={"study type"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedType}
            label={"study type"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedType}
            label={"study type"}
          />
        </th>
      </tr>
    );
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
        <Col md={2}>
          <Button
            size="md"
            floating="true"
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={() => createEntity()}
          >
            Add personal load
          </Button>
        </Col>
        <Col md={{ span: 4, offset: 6 }}></Col>
      </Row>
      <Row>
        <Table bordered hover responsive className="vertical-aligned-headers">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Group study type</th>
              <th>Semester</th>
              <th>Study type</th>
              <th>Course</th>
              <th>Volume hours</th>
              <th></th>
            </tr>
            {renderFiltersRow()}
          </thead>
          <tbody>{renderGroups(filteredLoads || groupLoads)}</tbody>
        </Table>
      </Row>
      {/* {isShowing && (
        <AddPersonalLoad
          show={isShowing}
          handleClose={toggle}
          submitPersonalLoad={submitFunction}
          personalLoad={editableEntity}
          personalLoadName="Personal Load"
          studyTypes={studyTypes}
        />
      )} */}
    </Container>
  );
}
