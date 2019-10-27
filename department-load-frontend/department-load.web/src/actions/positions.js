import axios from "../axios/axios";
import {
  GET_POSITIONS,
  DELETE_POSITION,
  ADD_POSITION,
  FAIL,
  START,
  SUCCESS
} from "../constants";

const _getPositions = positions => ({
  type: GET_POSITIONS + SUCCESS,
  payload: positions
});

const _deletePosition = id => ({
  type: DELETE_POSITION,
  payload: id
});

const _addPosition = position => ({
  type: ADD_POSITION,
  payload: position
});

export const getPositions = dispatch => {
  dispatch({
    type: GET_POSITIONS + START
  });
  axios.get("position/").then(result => {
    const positions = [];

    result.data.forEach(item => {
      positions.push(item);
    });

    dispatch(_getPositions(positions));
  });
};

export const deletePosition = (dispatch, id) => {
  dispatch(_deletePosition(id));
};

export const addPosition = (dispatch, position) => {
  axios.post("position/add", { position }).then(res => {
    console.log(res);
    console.log(res.data);
  });
};
