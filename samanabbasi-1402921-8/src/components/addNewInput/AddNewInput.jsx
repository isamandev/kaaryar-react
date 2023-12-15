import React from "react";
import "./AddNewInput.css";

const AddNewInput = ({ handleInputValue, emptyValue, handleEmptyValue }) => {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    handleInputValue(inputValue);
    handleEmptyValue(false);
  };
  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        className="add-input"
        placeholder="افزودن کار جدید"
        value={emptyValue ? "" : ""}
      />
    </div>
  );
};

export default AddNewInput;
