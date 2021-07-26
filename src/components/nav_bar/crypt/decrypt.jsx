import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Nav, NavDropdown } from "react-bootstrap";
import CryptoJS from "crypto-js";

export default function Decrypt({ setTaskList, setError, setErrMessage }) {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('')
  const [data, setData] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const decryptData = () => {
    let bytes = CryptoJS.AES.decrypt(data, key);
    let decryptedData;
    try {
      decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
      setErrMessage('bad key or data')
      setError(true)
    }
    return setTaskList(JSON.parse(decryptedData))
  }

  const handleDecryptData = () => {
    decryptData();
    handleClose();
  }

  return (
    <>
      <Nav.Item>
        <NavDropdown.Item onClick={handleShow}>Decrypt Data</NavDropdown.Item>
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
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Data</InputGroup.Text>
            <FormControl
              aria-label="Data"
              aria-describedby="basic-addon1"
              onChange={(e) => setData(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDecryptData}>
            Decrypt Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
