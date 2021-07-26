import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default function ExportJSON() {
  const getTaskListUrl = () => {
    const data = localStorage.getItem("taskList");
    const blob = new Blob([data], { type: "application/json" });
    return URL.createObjectURL(blob);
  };

  return (
    <Nav.Item>
      <NavDropdown.Item
        download="Loon-tasklist.json"
        textContent="Download Loon-tasklist.json"
        href={getTaskListUrl()}
      >
        Export
      </NavDropdown.Item>
    </Nav.Item>
  );
}
