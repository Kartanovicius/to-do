import React, { useState, useRef, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Delete from "./nav_bar/delete";
import Export from "./nav_bar/export";
import Import from "./nav_bar/import.";

export default function NavBar({ setTaskList, error, setErrMessage }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LocalOnline To-Do</Navbar.Brand>
          <Nav className="me-auto">
            <Delete setTaskList={setTaskList}/>
            <Export/>
            <Import setTaskList={setTaskList} error={error} setErrMessage={setErrMessage}/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
