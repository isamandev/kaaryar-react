import React from "react";
import "./Task.css";

const Task = ({ TaskTitle }) => {
  return (
    <div className="task-container">
      <button className="task-delete">X</button>
      <span className="task-title">{TaskTitle}</span>
    </div>
  );
};

export default Task;
