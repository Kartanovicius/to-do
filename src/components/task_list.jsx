import React from "react";

export default function TaskList({taskList}) {

  return (
    <div class="col border border-1 rounded">
      <ul class="list-group">
        {taskList.map((item) => (
          <li class="list-group-item" key={item}>
            <label>
              <input type="checkbox" class="mr-2" />
              <span> {item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
