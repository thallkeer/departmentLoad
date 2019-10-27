import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import TeachersList from "../components/Teacher/TeachersList";
import NotFound from "../components/NotFound";
import Container from "react-bootstrap/Container";
import PositionList from "../components/Position/PositionList";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          {/* <Route path="/" exact={true} component={Home} /> */}
          <Route path="/teachers" component={TeachersList} exact={true} />
          <Route path="/positions" exact={true} component={PositionList} />
          {/* <Route path="/roles" exact={true} component={RoleList} />
          <Route path="/cinemas" exact={true} component={CinemaList} />
          <Route path="/directors" exact={true} component={DirectorList} /> */}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
