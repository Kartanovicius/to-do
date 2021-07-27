import React, { useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import CryptoJS from "crypto-js";

export default function Encrypt() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");
  const [data, setData] = useState("");
  const [display, setDisplay] = useState("d-none");

  const handleClose = () => {
    setShow(false);
    setData("");
    setDisplay("d-none");
  };
  const handleShow = () => setShow(true);

  const handleEncryptData = () => {
    if(key !== ''){
      let ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(localStorage.getItem("taskList")),
        key
      ).toString();
      setData(ciphertext);
      setDisplay("");
    }
    else{
      return 0
    }
    
  };

  const handleCopyData = () => {
    const el = document.createElement("textarea");
    el.value = data;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <>
      <Nav.Item>
        <NavDropdown.Item onClick={handleShow}>Encrypt Data</NavDropdown.Item>
      </Nav.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <InputGroup className="my-3">
            <InputGroup.Text id="basic-addon1">Key</InputGroup.Text>
            <FormControl
              aria-label="Key"
              aria-describedby="basic-addon1"
              onChange={(e) => setKey(e.target.value)}
            />
          </InputGroup>
          <div class={`${display}`}>
            <div class="row">
              <div class="col text-break">{data}</div>
              <div class="col-md-auto align-right">
                <Button type="button" variant="dark" onClick={handleCopyData}>
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEncryptData}>
            Encrypt Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
