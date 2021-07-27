import React, { FC, Dispatch, SetStateAction } from "react";

interface Props {
  setTaskList: Dispatch<SetStateAction<[]>>;
}

const Delete: FC<Props> = ({ setTaskList }) => {
  const clearLocalStorage = () => {
    setTaskList([]);
    return localStorage.clear();
  };

  return (
    <li className="nav-item px-1">
      <a className="nav-link" href="#" onClick={clearLocalStorage}>Delete local storage</a>
    </li>
  );
};

export default Delete;
