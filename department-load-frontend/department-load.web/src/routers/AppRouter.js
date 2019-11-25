import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Container from "react-bootstrap/Container";
import {
  Positions,
  Disciplines,
  GroupStudies
} from "../decorators/simpleEntitiesDecorators";
import {
  TeacherList,
  PersonalLoadList,
  PersonalStudyList,
  SpecialityList
} from "../components/index";
import GroupLoadList from "../components/GroupLoad/GroupLoadList";

export default function AppRouter() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          {/* <Route path="/" exact={true} component={Home} /> */}
          <Route path="/teachers" component={TeacherList} exact={true} />
          <Route path="/positions" exact={true} component={Positions} />
          <Route path="/disciplines" exact={true} component={Disciplines} />
          <Route path="/groupStudies" exact={true} component={GroupStudies} />
          <Route path="/specialities" exact={true} component={SpecialityList} />
          <Route path="/groupLoads" exact={true} component={GroupLoadList} />
          <Route
            path="/personalLoads"
            exact={true}
            component={PersonalLoadList}
          />
          <Route
            path="/personalStudies"
            exact={true}
            component={PersonalStudyList}
          />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}
