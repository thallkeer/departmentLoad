import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import TeachersList from "../components/Teachers/TeachersList";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/teachers" component={TeachersList} exact={true} />
        {/*        
        <Route path="/add" component={AddBook} />
        
        <Route path="/book/:id" component={EditBook} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
