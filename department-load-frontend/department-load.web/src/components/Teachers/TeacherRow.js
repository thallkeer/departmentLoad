import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TeacherRow = ({
  teacherId,
  firstName,
  lastName,
  patronym,
  position,
  dispatch
}) => (
  <div>
    <Link to={`/teachers/${id}`}>
      <h4>
        {firstName} {lastName} {patronym}
      </h4>
    </Link>
    <p>Position: {position}</p>
    <button onClick={() => {}}>Remove</button>
  </div>
);

export default connect()(TeacherRow);
