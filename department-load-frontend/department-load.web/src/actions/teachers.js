import axios from "../axios/axios";
import {
  GET_TEACHERS,
  DELETE_TEACHER,
  FAIL,
  START,
  SUCCESS
} from "../constants";

const _getTeachers = teachers => ({
  type: GET_TEACHERS + SUCCESS,
  payload: teachers
});

const _deleteTeacher = id => ({
  type: DELETE_TEACHER,
  payload: id
});

export const getTeachers = dispatch => {
  dispatch({
    type: GET_TEACHERS + START
  });
  axios.get("teachers").then(result => {
    const teachers = [];

    result.data.forEach(item => {
      teachers.push(item);
    });

    dispatch(_getTeachers(teachers));
  });
};

export const deleteTeacher = (dispatch, id) => {
  dispatch(_deleteTeacher(id));
};
