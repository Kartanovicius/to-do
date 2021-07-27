import React, { useState, useEffect } from "react";
import ErrAlert from "./components/nav_bar/err_alert";
import Nav from "./components/nav_bar/nav";
import NewTask from "./components/new_task";
import TaskList from "./components/task_list/task_list";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <React.Fragment>
      <Nav
        setTaskList={setTaskList}
        setError={setError}
        setErrMessage={setErrMessage}
      />
      <div class="container">
        <div class=" border border-2 rounded mt-3 p-3">
          <ErrAlert error={error} errMessage={errMessage} />
          <NewTask setError={setError} setErrMessage={setErrMessage} setTaskList={setTaskList}/>
        </div>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </React.Fragment>
  );
}

export default App;
