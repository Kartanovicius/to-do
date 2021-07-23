import React from "react";
import { Nav } from "react-bootstrap";

export default function Delete({ setTaskList }) {

  const clearLocalStorage = () => {
    setTaskList([]);
    return localStorage.clear();
  };

  return (
    <Nav.Item class="px-1">
      <Nav.Link onClick={clearLocalStorage}>Delete local storage</Nav.Link>
    </Nav.Item>
  );
}
