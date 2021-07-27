import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

export default function NewTask({ setError, setErrMessage, setTaskList }) {
  const [taskInput, setTaskInput] = useState("");

  const addToTaskList = () => {
    if (taskInput !== "") {
      setError(false);
      setTaskList((oldElement) => [...oldElement, {name:taskInput, completed:false, date:(Date.now())}]);
      console.log({name:taskInput, completed:false, date:(Date.now())})
      setTaskInput("");
    } else {
      setErrMessage('Input "Task" is field empty');
      setError(true);
    }
  };

  return (
    <Form>
      <Form.Group controlId="taskInput">
        <Form.Label>Add new task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Order new pair of shoes"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
      </Form.Group>
      <Button onClick={addToTaskList} className="my-3" variant="primary">
        Submit
      </Button>
    </Form>
  );
}
