import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import TeachersList from "../components/Teacher/TeachersList";
import NotFound from "../components/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/teachers" component={TeachersList} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
