import React from "react";
import "./AddNewInput.css";

const AddNewInput = ({ handleInputValue, emptyValue, handleEmpptyValue }) => {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    handleInputValue(inputValue);
    handleEmpptyValue(false);
  };
  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        className="add-input"
        placeholder="افزودن کار جدید"
        value={emptyValue ? "" : null}
      />
    </div>
  );
};

export default AddNewInput;
