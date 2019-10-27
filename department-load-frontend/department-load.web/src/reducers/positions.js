import {
  GET_POSITIONS,
  SUCCESS,
  ADD_POSITION,
  DELETE_POSITION,
  START
} from "../constants";

export const positionReducer = (state, action) => {
  switch (action.type) {
    case GET_POSITIONS + START:
      return {
        ...state,
        loading: true
      };

    case GET_POSITIONS + SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        loading: false,
        positions: action.payload
      };

    case ADD_POSITION:
      return {
        ...state,
        teachers: [...state.teachers, action.payload]
      };
    case DELETE_POSITION:
      const currentPositions = state.positions.filter(
        p => p.positionId !== action.payload
      );

      return {
        ...state,
        positions: currentPositions
      };
    default:
      return state;
  }
};
