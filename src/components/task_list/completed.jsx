import React, { useState, useEffect } from "react";

export default function Completed({ taskList, setTaskList }) {
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    const newArrayState = taskList.filter((item) => {
      return item[1] === true;
    });
    setCompletedList(newArrayState);
  }, [taskList]);
  

  const handleTaskListUpdate = (event) => {
        let taskListCopy = [...taskList];
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i][0] === event.target.value){
                taskListCopy[i][1] = !taskListCopy[i][1];
            }            
        }
    setTaskList(taskListCopy);
  };

  return (
    <div class="col border border-1 rounded">
      <ul class="list-group">
        {completedList.map((item) => (
          <li class="list-group-item" key={item[0]}>
            <label>
              <input
                type="checkbox"
                class="mr-2"
                checked={item[1]}
                value={item[0]}
                onChange={handleTaskListUpdate}
              />
              <span> {item[0]}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
