import React, { useState } from "react";
import "./ApplyButton.css";
import { writeJSON } from "../../utils/local-storage";

const ApplyButton = ({ InputValue, handleEmptyValue }) => {
  const [newTodos, setNewTodos] = useState([]);

  const handleApply = () => {
    const newInput = InputValue;
    if (newInput === "") {
      alert("ورودی درستی وارد کنید");
    } else {
      const date = new Date();
      const updatedTodos = [...newTodos, { id: date, task: newInput }];
      setNewTodos(updatedTodos);
      writeJSON("Todos", updatedTodos);
      handleEmptyValue(true);
    }
  };

  return (
    <>
      <button onClick={handleApply} className="apply-button button">
        کار جدید
      </button>
    </>
  );
};

export default ApplyButton;
