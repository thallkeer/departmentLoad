import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavItem, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { LinkContainer } from "react-router-bootstrap";

const entitiesLinks = [
  { url: "/teachers", text: "Teachers" },
  { url: "/personalLoads", text: "Personal loads" }
  // { url: "/studyGroups", text: "Study groups" }
];

const links = [
  { url: "/positions", text: "Positions" },
  { url: "/disciplines", text: "Disciplines" },
  { url: "/specialities", text: "Specialities" },
  // { url: "/groupLoads", text: "Group loads" },
  { url: "/groupStudies", text: "Group studies" },
  { url: "/personalStudies", text: "Personal studies" }
];

export default function Header() {
  const userInfo = useContext(UserContext);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed>
      <Navbar.Brand>
        <NavLink className="clear-link-style" to="/home">
          Department load Application
        </NavLink>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {userInfo.authenticated ? (
            <>
              <NavDropdown
                title="Main entities"
                style={{ right: "0", left: "auto" }}
              >
                {entitiesLinks.map(el => (
                  <LinkContainer key={el.url} to={el.url}>
                    <NavDropdown.Item>{el.text}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
              <NavDropdown title="Catalogs" id="basic-nav-dropdown">
                {links.map(el => (
                  <LinkContainer key={el.url} to={el.url}>
                    <NavDropdown.Item>{el.text}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>

              <Nav.Link>
                <NavItem onClick={userInfo.logoff}>Logout</NavItem>
              </Nav.Link>
            </>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
