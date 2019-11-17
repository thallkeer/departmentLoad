import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "teachers", text: "Teachers" },
  { url: "/positions", text: "Positions" },
  { url: "/disciplines", text: "Disciplines" },
  { url: "/specialities", text: "Specialities" },
  { url: "/groupLoads", text: "Group loads" },
  { url: "/groupStudies", text: "Group studies" },
  { url: "/personalLoads", text: "Personal loads" },
  { url: "/personalStudies", text: "Personal studies" }
];

const Header = () => (
  <header>
    <h2>Department load Application</h2>
    <div className="header_nav">
      {links.map(link => (
        <NavLink to={link.url} exact={true}>
          {link.text}
        </NavLink>
      ))}
    </div>
  </header>
);

export default Header;
