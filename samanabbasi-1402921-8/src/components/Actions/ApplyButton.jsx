import React from "react";
import "./ApplyButton.css";
import { writeJSON } from "../../utils/local-storage";

const ApplyButton = ({ InputValue, handleEmptyValue, handelNewTodos }) => {
  const handleApply = () => {
    const newInput = InputValue;
    const newTodos = handelNewTodos() === null ? [] : handelNewTodos();
    if (newInput === "") {
      alert("ورودی درستی وارد کنید");
    } else {
      const date = new Date();
      const updatedTodos = [
        ...newTodos,
        { id: date.getTime(), task: newInput },
      ];
      handelNewTodos(updatedTodos);
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
