import React from "react";
import "./Tasks.css";
import Task from "./Task";
import { readJSON } from "../../utils/local-storage";

const Tasks = () => {
  const data = readJSON("Todos");
  console.log(data);
  return (
    <div className="tasks-container">
      {data.map((item) => (
        <Task key={item.data} TaskTitle={item.task} />
      ))}
    </div>
  );
};

export default Tasks;
