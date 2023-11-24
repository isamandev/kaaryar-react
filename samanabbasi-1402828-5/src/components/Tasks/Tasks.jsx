import React from "react";
import "./Tasks.css";
import Task from "./Task";
import tasklist from "../../task";
const Tasks = () => {
  return (
    <div className="tasks-container">
      {tasklist.map((task) => (
        <Task key={task.id} TaskTitle={task.title} />
      ))}
    </div>
  );
};

export default Tasks;
