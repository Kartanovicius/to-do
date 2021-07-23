import React, { useRef } from "react";
import { Nav } from "react-bootstrap";

export default function Import({ setTaskList, error, setErrMessage }) {
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
          error(true);
        }
      } catch (err) {
        setErrMessage("Use JSON file format");
        error(true);
      }
    };
  };

  return (
    <Nav.Item>
      <input
        type="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <Nav.Link onClick={onButtonClick}>Import JSON</Nav.Link>
    </Nav.Item>
  );
}
