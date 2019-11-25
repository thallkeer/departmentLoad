import React, { useState, useCallback } from "react";
import { Row, Container, Button, Table, Spinner } from "react-bootstrap";
import ActionsButtons from "../ActionsButtons";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks";
import { SelectList } from ".././index";
import { useFilter } from "../../hooks/useFilter";

const model = {
  groupKey: {
    discipline: {
      id: 0,
      name: ""
    }
  },
  values: [
    {
      groupKey: {
        id: 0,
        name: ""
      },
      values: [
        {
          id: 0,
          groupNumber: "",
          teacherFullName: "",
          teacherID: 0,
          volumeHours: 0
        }
      ]
    }
  ]
};

const initialFiltersState = {
  teacherID: "",
  groupNumber: "",
  semester: "",
  studyType: ""
};

export default function GroupLoadList() {
  const [studyTypes] = useAxios("groupStudy");
  const [teachers] = useAxios("teacher");
  const [groups] = useAxios("group");
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

  const doFilter = useCallback(() => {
    filterFunc(groupLoads);
  }, []);

  const { filtersState, handleFilterChange, filterSelector } = useFilter(
    initialFiltersState,
    doFilter
  );

  const filterFunc = (groupLoadsArr, selector) => {
    const groupedGroupLoads = JSON.parse(JSON.stringify(groupLoadsArr));

    groupedGroupLoads.forEach(group => {
      group.values.forEach(groupValue => {
        const loads = groupValue.values;
        console.log(loads);
        const filtered = loads.filter(selector);
        console.log(filtered);
        group.values.values = filtered.length === 0 ? null : filtered;
      });
    });

    setFilteredLoads(groupedGroupLoads.filter(g => g.values.values));
  };

  const renderGroupHeader = header => {
    return (
      <tr key={header.id}>
        <th
          colSpan="6"
          style={{
            backgroundColor: "#ADD8E6",
            borderColor: "#dee2e6",
            textAlign: "left"
          }}
        >
          {header.name}
        </th>
      </tr>
    );
  };

  const renderGrouped = loads => {
    return loads.map(load => (
      <tr key={load.id}>
        <th>{load.teacherFullName}</th>
        <th>{load.groupNumber}</th>
        <th>Semester</th>
        <th>Study type</th>
        <th>{load.volumeHours}</th>
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
      renderGroupHeader(group.groupKey),
      group.values.map(groupStudyGroup => [
        renderGroupHeader(groupStudyGroup.groupKey),
        renderGrouped(groupStudyGroup.values)
      ])
    ]);
  };

  const renderFiltersRow = () => {
    return (
      <tr style={{ backgroundColor: "white" }}>
        <th>
          <SelectList
            items={teachers}
            dataTextField={"fullName"}
            onChangeHandler={handleFilterChange}
            selectedValue={filtersState.teacher}
            filterName={"teacherID"}
          />
        </th>
        <th>
          <SelectList
            items={groups}
            dataTextField={"groupNumber"}
            onChangeHandler={handleFilterChange}
            selectedValue={filtersState.group}
            filterName={"groupNumber"}
            keyProperty={"groupNumber"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={filtersState.semester}
            label={"study type"}
          />
        </th>
        <th>
          <SelectList
            items={studyTypes}
            dataTextField={"individualClassName"}
            onChangeHandler={handleFilterChange}
            selectedValue={filtersState.studyType}
            label={"study type"}
          />
        </th>
        <th></th>
        <th></th>
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
        <Button
          size="md"
          floating="true"
          variant="primary"
          style={{ marginBottom: "10px" }}
          onClick={() => createEntity()}
        >
          Add personal load
        </Button>
      </Row>
      <Row>
        <Table hover>
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Group number</th>
              <th>Semester</th>
              <th>Study type</th>
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
