import React from "react";
import "./Tasks.css";
import Task from "./Task";
import { readJSON } from "../../utils/local-storage";

const Tasks = () => {
  const data = readJSON("Todos");

  const renderTasks = () => {
    if (data != null) {
      return data.map((item) => <Task key={item.data} TaskTitle={item.task} />);
    }
    return null;
  };

  return <div className="tasks-container">{renderTasks()}</div>;
};

export default Tasks;
