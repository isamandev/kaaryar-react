import React from "react";
import "./ActionsButtons.css";
import ApplyButton from "./ApplyButton";
import CancellButton from "./CancellButton";
const ActionsButtons = ({ handleInputValue, InputValue, handleEmptyValue }) => {
  return (
    <div className="actions-buttons-container">
      <ApplyButton
        handleInputValue={handleInputValue}
        InputValue={InputValue}
        handleEmptyValue={handleEmptyValue}
      />
      <CancellButton />
    </div>
  );
};

export default ActionsButtons;
