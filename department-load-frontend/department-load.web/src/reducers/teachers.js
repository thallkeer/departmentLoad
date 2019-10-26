import { GET_TEACHERS } from "../constants";

const teachersReducerDefaultState = [];

export default (state = teachersReducerDefaultState, action) => {
  switch (action.type) {
    case GET_TEACHERS:
      return action.teachers;
    default:
      return state;
  }
};
