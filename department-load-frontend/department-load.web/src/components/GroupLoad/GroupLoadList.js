import React, { useState, useEffect } from "react";
import { Row, Container, Button, Table, Spinner, Col } from "react-bootstrap";
import ActionsButtons from "../ActionsButtons";
import useModal from "../../hooks/useModal";
import { useAxios } from "../../hooks";
import { SelectList } from ".././index";
import AddGroupLoad from "./AddGroupLoad";

const initialFiltersState = {
  teacherID: ""
  // groupNumber: "",
  // semester: "",
  // groupStudy: ""
};

class StateObject {
  constructor(groupLoads, groupStudies, teachers, groups) {
    this.groupLoads = groupLoads;
    this.groupStudies = groupStudies;
    this.teachers = teachers;
    this.groups = groups;
  }
}

export default function GroupLoadList() {
  const [groupStudies] = useAxios("groupStudy");
  const [teachers] = useAxios("teacher");
  const [groups] = useAxios("group");
  const [
    ,
    ,
    addGroupLoad,
    updateGroupLoad,
    deleteGroupLoad,
    getById
  ] = useAxios(null);

  const groupLoads = getById(
    "groupLoad/teacherLoads",
    teachers[0] ? teachers[0].id : null
  );

  const state = new StateObject(groupLoads, groupStudies, teachers, groups);

  const [filteredLoads, setFilteredLoads] = useState(state.groupLoads);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const {
    isShowing,
    toggle,
    createEntity,
    editEntity,
    editableEntity,
    submitFunction
  } = useModal(updateGroupLoad, addGroupLoad);

  //const [filtersState, setFiltersState] = useState(initialFiltersState);

  // const handleFilterChange = e => {
  //   const { name, value } = e.target;

  //   setFiltersState({
  //     ...filtersState,
  //     [name]: value != 0 ? value : ""
  //   });
  // };
  const handleFilterChange = e => {
    const id = e.target.value;
    setSelectedTeacher(id);

    const doFilter = data => {
      data.filter(group => {
        group.values = group.values.filter(groupValue => {
          groupValue.values = groupValue.values.filter(item => item.id === id);
          return groupValue.values.length;
        });
        return group.values.length;
      });
    };

    setFilteredLoads(doFilter(groupLoads));
  };

  // useEffect(() => {
  //   const doFilter = groupLoadsArr => {
  //     const groupedGroupLoads = JSON.parse(JSON.stringify(groupLoadsArr));

  //     groupedGroupLoads.forEach(group => {
  //       group.values.forEach(groupValue => {
  //         const loads = groupValue.values;
  //         const filtered = loads.filter(load => filterSelector(load));
  //         group.values.values = filtered.length === 0 ? null : filtered;
  //       });
  //     });

  //     console.log(groupedGroupLoads.filter(g => g.values.values));

  //     setFilteredLoads();
  //   };

  //   function filterBy(data) {
  //     return data.filter(group => {
  //       group.values = group.values.filter(groupValue => {
  //         groupValue.values = groupValue.values.filter(item =>
  //           filterSelector(item)
  //         );
  //         return groupValue.values.length;
  //       });
  //       return group.values.length;
  //     });
  //   }

  //   const filterSelector = item => {
  //     for (let key in filtersState) {
  //       if (
  //         filtersState[key] !== "" &&
  //         (item[key] === undefined || item[key] != filtersState[key])
  //       )
  //         return false;
  //     }

  //     return true;
  //   };

  //   console.log(state.groupLoads);

  //   if (state.groupLoads) setFilteredLoads(filterBy(state.groupLoads));
  // }, [state.groupLoads, filtersState]);

  const renderGroupHeader = (header, color) => {
    return (
      <tr key={header.id}>
        <th
          colSpan="6"
          style={{
            backgroundColor: color,
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
        <th>{load.groupNumber}</th>
        <th>{load.semester}</th>
        <th>{load.studyType}</th>
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
      renderGroupHeader(group.groupKey, "#138496"),
      group.values.map(groupStudyGroup => [
        renderGroupHeader(groupStudyGroup.groupKey, "#ADD8E6"),
        renderGrouped(groupStudyGroup.values)
      ])
    ]);
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
          Add group load
        </Button>
        <Col md={{ offset: 6 }}>
          <SelectList
            items={teachers}
            dataTextField={"fullName"}
            onChangeHandler={handleFilterChange}
            selectedValue={selectedTeacher}
            filterName={"teacherID"}
          />
        </Col>
      </Row>
      <Row>
        <Table hover>
          <thead>
            <tr>
              <th>Group number</th>
              <th>Semester</th>
              <th>Study type</th>
              <th>Volume hours</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{filteredLoads && renderGroups(filteredLoads)}</tbody>
        </Table>
      </Row>
      {isShowing && (
        <AddGroupLoad
          show={isShowing}
          handleClose={toggle}
          submitGroupLoad={submitFunction}
          groupLoadID={editableEntity != null ? editableEntity.id : null}
          groupLoadName="Personal Load"
          groupStudies={groupStudies}
          groups={groups}
        />
      )}
    </Container>
  );
}
