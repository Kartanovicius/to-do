import React from "react";
import Completed from "./completed";
import InProgress from "./in_progress";

export default function TaskList({ taskList, setTaskList }) {

  return (
    <>
      <h4 class='mt-3'>In Progress</h4>
      <InProgress taskList={taskList}  setTaskList={setTaskList}/>
      <h4 class='mt-3'>Completed</h4>
      {<Completed taskList={taskList}  setTaskList={setTaskList}/>}
    </>
  );
}
