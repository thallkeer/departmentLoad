import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import getAppStore from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import { Provider } from "react-redux";

const store = getAppStore();

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(template, document.getElementById("root"));
