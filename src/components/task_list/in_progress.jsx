import React, { useState, useEffect } from "react";

export default function InProgress({ taskList, setTaskList }) {
  const [inProgressList, setInProgressList] = useState([]);

  useEffect(() => {
    const newArrayState = taskList.filter((item) => {
      return item.completed === false;
    });
    setInProgressList(newArrayState);
  }, [taskList]);
  

  const handleTaskListUpdate = (event) => {
        let taskListCopy = [...taskList];
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i].name === event.target.value){
                taskListCopy[i].completed = !taskListCopy[i].completed;
            }            
        }
    setTaskList(taskListCopy);
  };

  return (
    <div class="col border border-1 rounded">
      <ul class="list-group">
        {inProgressList.map((item) => (
          <li class="list-group-item" key={item.name}>
            <label>
              <input
                type="checkbox"
                class="mr-2"
                checked={item.completed}
                value={item.name}
                onChange={handleTaskListUpdate}
              />
              <span> {item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
