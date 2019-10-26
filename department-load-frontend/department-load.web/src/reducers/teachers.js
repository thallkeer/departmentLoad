import {
  GET_TEACHERS,
  SUCCESS,
  ADD_TEACHER,
  DELETE_TEACHER,
  START
} from "../constants";

export const teacherReducer = (state, action) => {
  switch (action.type) {
    case GET_TEACHERS + START:
      return {
        ...state,
        loading: true
      };

    case GET_TEACHERS + SUCCESS:
      const positionsList = {};
      action.payload.forEach(teacher => {
        const id = teacher.position.positionId;
        const name = teacher.position.positionName;
        positionsList[id] = name;
      });
      return {
        ...state,
        loading: false,
        teachers: action.payload,
        positions: positionsList
      };

    case ADD_TEACHER + SUCCESS:
      return {
        ...state,
        teachers: [...state.teachers, action.payload]
      };
    case DELETE_TEACHER:
      const currentTeachers = state.teachers.filter(
        t => t.teacherId !== action.payload
      );

      return {
        ...state,
        teachers: currentTeachers
      };
    default:
      return state;
  }
};
