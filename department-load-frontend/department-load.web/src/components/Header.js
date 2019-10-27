import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h2>Department load Application</h2>
    <div className="header_nav">
      <NavLink to="/teachers" activeClassName="activeNav" exact={true}>
        Teachers
      </NavLink>
      <NavLink to="/positions" activeClassName="activeNav" exact={true}>
        Positions
      </NavLink>
    </div>
  </header>
);

export default Header;
