import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import TeachersList from "../components/Teacher/TeachersList";
import NotFound from "../components/NotFound";
import Container from "react-bootstrap/Container";
import {
  Positions,
  Disciplines,
  GroupStudies,
  Specialities
} from "../decorators/simpleEntitiesDecorators";
import PersonalLoadList from "../components/PersonalLoad/PersonalLoadList";

export default function AppRouter() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          {/* <Route path="/" exact={true} component={Home} /> */}
          <Route path="/teachers" component={TeachersList} exact={true} />
          <Route path="/positions" exact={true} component={Positions} />
          <Route path="/disciplines" exact={true} component={Disciplines} />
          <Route path="/groupStudies" exact={true} component={GroupStudies} />
          <Route path="/specialities" exact={true} component={Specialities} />
          <Route
            path="/personalLoads"
            exact={true}
            component={PersonalLoadList}
          />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}
