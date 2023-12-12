import React from "react";
import "./Tasks.css";
import Task from "./Task";
import { readJSON } from "../../utils/local-storage";

const Tasks = () => {
  const tasksData = readJSON("Todos");

  const displayTask = () => {
    if (tasksData.length === 0) {
      return null;
    } else {
      return Array.from(tasksData).map((task) => (
        <Task key={task.id} TaskTitle={task.title} />
      ));
    }
  };

  return <div className="tasks-container">{displayTask()}</div>;
};

export default Tasks;
