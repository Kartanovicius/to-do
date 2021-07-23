import React from "react";
import { Nav } from "react-bootstrap";

export default function Export() {

  const getTaskListUrl = () => {
    const data = localStorage.getItem("taskList");
    const blob = new Blob([data], { type: "application/json" });
    return URL.createObjectURL(blob);
  }

  return (
    <Nav.Item>
      <Nav.Link
        download="Loon-tasklist.json"
        textContent="Download Loon-tasklist.json"
        href={getTaskListUrl()}
      >
        Export JSON
      </Nav.Link>
    </Nav.Item>
  );
}
