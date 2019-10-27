import React, { useState, useEffect, useReducer } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter
} from "react-bootstrap-table2-filter";
import Loader from "../Loader";
import { getTeachers, deleteTeacher, addTeacher } from "../../actions/teachers";
import { teacherReducer } from "../../reducers/teachers";
import { Row, Container, Button } from "react-bootstrap";
import AddTeacher from "../Forms/AddTeacher";
import useModal from "../../hooks/useModal";
import { TeachersListContext } from "../../context/TeachersListContext";

const getColumns = (positions, actions) => {
  return [
    {
      dataField: "teacherId",
      text: "ID",
      hidden: true
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      filter: textFilter()
    },
    {
      dataField: "firstName",
      text: "First Name",
      filter: textFilter()
    },
    {
      dataField: "patronym",
      text: "Patronym",
      filter: textFilter()
    },
    {
      dataField: "position.positionName",
      text: "Position",
      filter: selectFilter({
        options: positions
      })
    },
    {
      dataField: "actions",
      text: "Actions",
      isDummyField: true,
      formatter: actions
    }
  ];
};

const initialState = {
  loading: true,
  teachers: [],
  positions: {}
};

export default function TeacherList() {
  const [teachersState, dispatch] = useReducer(teacherReducer, initialState);
  const { isShowing, toggle } = useModal();
  const [editableTeacher, setEditableTeacher] = useState({});

  const editTeacher = teacherRow => {
    console.log(teacherRow);

    setEditableTeacher(teacherRow);
    toggle();
  };

  const addActions = (cell, row) => {
    return (
      <div>
        <Button
          size="sm"
          floating="true"
          color="white"
          variant="success"
          onClick={() => editTeacher(row)}
        >
          Edit
        </Button>
        <Button
          size="sm"
          floating="true"
          color="white"
          variant="danger"
          onClick={() => deleteTeacher(dispatch, row.teacherId)}
        >
          Delete
        </Button>
      </div>
    );
  };

  useEffect(() => {
    getTeachers(dispatch);
  }, []);

  const submitTeacher = teacher => {
    addTeacher(dispatch, teacher);
  };

  return (
    <Container>
      {teachersState.loading ? (
        <Loader />
      ) : (
        <Row>
          <Button
            size="md"
            floating="true"
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={() => editTeacher(null)}
          >
            Add Teacher
          </Button>
          <BootstrapTable
            striped
            hover
            keyField="teacherId"
            data={teachersState.teachers}
            columns={getColumns(teachersState.positions, addActions)}
            filter={filterFactory()}
          />
        </Row>
      )}
      <TeachersListContext.Provider value={{ submitTeacher }}>
        <AddTeacher
          show={isShowing}
          handleClose={toggle}
          teacher={editableTeacher}
          positions={teachersState.positions}
        />
      </TeachersListContext.Provider>
    </Container>
  );
}
