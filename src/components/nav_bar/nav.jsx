import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Delete from "./delete.tsx";
import ExportJSON from "./json/export";
import ImportJSON from "./json/import";
import Encrypt from "./crypt/encrypt";
import Decrypt from "./crypt/decrypt";

export default function NavBar({ setTaskList, setError, setErrMessage }) {
  return (
    <div>
      <Navbar class="navbar navbar-dark bg-dark" collapseOnSelect="on" expand="sm" bg="dark" variant="dark">
        <Container>
        <a class="navbar-brand" href="/">Deekar To-Do</a>
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
