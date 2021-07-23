import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import Nav from "./components/nav";
import TaskList from "./components/task_list.jsx";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setTaskInput("");
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const addToTaskList = () => {
    taskInput === "" ? setError(true) : setError(false);
    setErrMessage('Input "Task" is field empty');
    if (taskInput !== "")
      return setTaskList((oldElement) => [...oldElement, taskInput]);
  };

  return (
    <React.Fragment>
      <Nav
        setTaskList={setTaskList}
        error={setError}
        setErrMessage={setErrMessage}
      />
      <div class="container">
        <div class="row  ">
          <div class="col ">
            <div class=" border border-2 rounded mt-3 p-3">
              <Alert variant="danger" hidden={error === false ? true : false}>
                {errMessage}
              </Alert>
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
                <Button
                  onClick={addToTaskList}
                  className="my-3"
                  variant="primary"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div class="col">
            <div class=" mt-3 ">
              <h4>In Progress</h4>
              <TaskList taskList={taskList} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
