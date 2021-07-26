import React, { useRef } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default function ImportJSON({ setTaskList, setError, setErrMessage }) {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      try {
        if(JSON.parse(e.target.result) != null){
          setTaskList(JSON.parse(e.target.result));
        }
        else{
          setErrMessage("File is empty");
          setError(true);
        }
      } catch (err) {
        setErrMessage("Use JSON file format");
        setError(true);
      }
    };
  };

  return (
    <Nav.Item NavDropdown>
      <input
        type="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <NavDropdown.Item onClick={onButtonClick}>Import</NavDropdown.Item>
    </Nav.Item>
  );
}
