import React from "react";
import "./Tasks.css";
import Task from "./Task";
import { readJSON } from "../../utils/local-storage";

const Tasks = ({ handelNewTodos }) => {
  const data = readJSON("Todos") || [];

  const renderTasks = () => {
    if (data != null) {
      return data.map((item) => (
        <Task
          key={item.id}
          taskId={item.id}
          TaskTitle={item.task}
          handelNewTodos={handelNewTodos}
        />
      ));
    }
    return null;
  };

  return <div className="tasks-container">{renderTasks()}</div>;
};

export default Tasks;
