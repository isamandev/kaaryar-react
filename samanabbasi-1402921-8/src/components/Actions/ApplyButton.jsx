import React from "react";
import "./ApplyButton.css";
import { writeJSON } from "../../utils/local-storage";

const ApplyButton = ({ InputValue, handleEmpptyValue }) => {
  const handleApply = () => {
    const newInput = InputValue;
    writeJSON("Todos", newInput);
    handleEmpptyValue(true);
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
