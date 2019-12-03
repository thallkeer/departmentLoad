import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem(ACCESS_TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);
