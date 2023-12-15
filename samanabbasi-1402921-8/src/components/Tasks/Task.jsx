import React from "react";
import "./Task.css";

const Task = ({ TaskTitle, key }) => {
  return (
    <div className="task-container" key={key}>
      <button className="task-delete">X</button>
      <span className="task-title">{TaskTitle}</span>
    </div>
  );
};

export default Task;
