import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter
} from "react-bootstrap-table2-filter";
import axios from "../../axios/axios";
import Loader from "../Loader";

function rowClassNameFormat(row, rowIdx) {
  console.log(row, rowIdx);

  return rowIdx % 2 === 0 ? "Gold-Row" : "Silver-Row";
}

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
      text: "Position"
    }
  ];
};

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [columns, setColumns] = useState(getColumns);
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("teachers")
      .then(response => {
        setTeachers(response.data);
        const positionsList = [];
        response.data.forEach(teacher => {
          if (
            !positionsList.includes(
              p => p.positionId === teacher.position.positionId
            )
          )
            positionsList.push(teacher.position);
        });
        console.log(positionsList);
        setPositions(positionsList);
      })
      .then(setIsLoading(false));
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <BootstrapTable
          striped
          hover
          keyField="teacherId"
          data={teachers}
          columns={columns}
          trClassName={rowClassNameFormat}
          filter={filterFactory()}
        />
      )}
    </div>
  );
}
