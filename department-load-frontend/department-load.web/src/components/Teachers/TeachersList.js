import React, { useState, useEffect, useReducer } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter
} from "react-bootstrap-table2-filter";
import Loader from "../Loader";
import { getTeachers } from "../../actions/teachers";
import Button from "react-bootstrap/Button";
import teacherReducer from "../../reducers/teachers";

const initialState = {
  loading: true,
  teachers: [],
  positions: {}
};

export default function TeacherList() {
  const getColumns = () => {
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
          options: teachersState.positions
        })
      },
      {
        dataField: "actions",
        text: "Actions",
        isDummyField: true
      }
    ];
  };

  const addActions = (cell, row) => {
    return (
      <div>
        <Button size="sm" />
      </div>
    );
  };

  const [teachersState, dispatch] = useReducer(teacherReducer, initialState);

  useEffect(() => {
    getTeachers(dispatch);
  }, []);

  return (
    <div className="container">
      {teachersState.loading ? (
        <Loader />
      ) : (
        <BootstrapTable
          striped
          hover
          keyField="teacherId"
          data={teachersState.teachers}
          columns={getColumns()}
          filter={filterFactory()}
        />
      )}
    </div>
  );
}
