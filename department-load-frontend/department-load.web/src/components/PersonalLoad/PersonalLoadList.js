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
import { useSimpleEntity } from "../../hooks/useSimpleEntity";
import { usePersonalLoad } from "../../hooks/usePersonalLoad";

export default function PersonalLoadList() {
  // studyTypes = useSimpleEntity('')
  const [selectedType, setSelectedType] = useState("");
  const { personalLoads, loading } = usePersonalLoad();

  const groups = [
    {
      key: "test key",
      values: ["1", "2"]
    }
  ];

  const renderGroupHeader = group => {
    return (
      <tr>
        <th
          colSpan="5"
          style={{ backgroundColor: "#ADD8E6", borderColor: "#dee2e6" }}
        >
          {group.teacher}
        </th>
      </tr>
    );
  };

  const renderGrouped = group => {
    return group.personalLoads.map(load => (
      <tr>
        <td>{load.studyTypeID}</td>
        <td>{load.studentsCount}</td>
        <td>Test3</td>
        <td>
          <ActionsButtons
            onEdit={() => console.log("Edit")}
            onDelete={() => console.log("Delete")}
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

  const handleFilterChange = e => {};

  return (
    <Container style={{ border: "1px solid red" }}>
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
            <option>test</option>
            <option>test1</option>
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
              <th></th>
            </tr>
          </thead>
          <tbody>{renderGroups(personalLoads)}</tbody>
        </Table>
      </Row>
    </Container>
  );
}
