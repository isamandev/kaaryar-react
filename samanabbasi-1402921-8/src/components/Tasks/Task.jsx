import React from "react";
import "./Task.css";
import { readJSON, writeJSON } from "../../utils/local-storage";

const Task = ({ TaskTitle, taskId, handelNewTodos }) => {
  const handleDeleteTask = (event) => {
    const clickedTaskId = event.target.closest(".task-container").dataset.id;
    console.log("taskId: " + clickedTaskId);
    const initialTodos = readJSON("Todos");
    const index = initialTodos.findIndex(
      (task) => task.id === Number(clickedTaskId)
    );
    initialTodos.splice(index, 1);
    const updatedTodos = initialTodos;
    writeJSON("Todos", updatedTodos);
    handelNewTodos(updatedTodos);
  };
  return (
    <div key={taskId} className="task-container" data-id={`${taskId}`}>
      <button onClick={handleDeleteTask} className="task-delete">
        X
      </button>
      <span className="task-title">{TaskTitle}</span>
    </div>
  );
};

export default Task;
