import axios from "../axios/axios";
import { GET_TEACHERS, FAIL, START, SUCCESS } from "../constants";

const _getTeachers = teachers => ({
  type: GET_TEACHERS,
  teachers
});

export const getTeachers = () => {
  return dispatch => {
    return axios.get("teachers").then(result => {
      const teachers = [];

      result.data.forEach(item => {
        teachers.push(item);
      });

      dispatch(_getTeachers(teachers));
    });
  };
};
