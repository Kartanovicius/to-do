import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Delete from "./delete";
import ExportJSON from "./json/export";
import ImportJSON from "./json/import";
import Encrypt from "./crypt/encrypt";
import Decrypt from "./crypt/decrypt";

export default function NavBar({ setTaskList, setError, setErrMessage }) {
  return (
    <div>
      <Navbar collapseOnSelect="on" expand="sm" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">LocalOnline To-Do</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Delete setTaskList={setTaskList} />
              <NavDropdown title="JSON" id="collasible-nav-dropdown">
                <ExportJSON />
                <ImportJSON
                  setTaskList={setTaskList}
                  setError={setError}
                  setErrMessage={setErrMessage}
                />
              </NavDropdown>
              <NavDropdown title="Crypt" id="collasible-nav-dropdown">
                <Encrypt setTaskList={setTaskList} />
                <Decrypt
                  setTaskList={setTaskList}
                  setError={setError}
                  setErrMessage={setErrMessage}
                />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
