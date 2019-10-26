import { createStore, applyMiddleware } from "redux";
import teachers from "../reducers/teachers";
import thunk from "redux-thunk";

export default () => {
  return createStore(teachers, applyMiddleware(thunk));
};
