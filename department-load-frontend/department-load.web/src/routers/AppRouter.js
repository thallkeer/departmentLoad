import React from "react";
import { /* BrowserRouter as*/ Router, Route, Switch } from "react-router-dom";
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
  SpecialityList,
  Home,
  PrivateRoute
} from "../components/index";
import SignUpComponent from "../components/User/SignInComponent";
import { UserContext } from "../contexts/UserContext";
import history from "../history";
import { useUser } from "../hooks";

export default function AppRouter() {
  const privateRoutes = [
    { path: "/teachers", component: TeacherList },
    { path: "/positions", component: Positions },
    { path: "/disciplines", component: Disciplines },
    { path: "/groupStudies", component: GroupStudies },
    { path: "/specialities", component: SpecialityList },
    // { path: "/groupLoads", component: GroupLoadList },
    { path: "/personalLoads", component: PersonalLoadList },
    { path: "/personalStudies", component: PersonalStudyList },
    // { path: "/studyGroups", component: GroupList },
    { path: "/home", component: Home }
  ];

  const userInfo = useUser();

  return (
    <Router history={history}>
      <UserContext.Provider value={userInfo}>
        <Header />
        <Container style={{ marginTop: "10px" }}>
          <Switch>
            <Route path="/" exact={true} component={SignUpComponent} />
            <Route path="/signin" exact={true} component={SignUpComponent} />
            {privateRoutes.map(r => (
              <PrivateRoute
                key={r.path}
                path={r.path}
                exact={true}
                component={r.component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Container>
      </UserContext.Provider>
    </Router>
  );
}
