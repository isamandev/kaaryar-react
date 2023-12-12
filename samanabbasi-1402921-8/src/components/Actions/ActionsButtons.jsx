import React from "react";
import "./ActionsButtons.css";
import ApplyButton from "./ApplyButton";
import CancellButton from "./CancellButton";
const ActionsButtons = ({
  handleInputValue,
  InputValue,
  handleEmpptyValue,
}) => {
  return (
    <div className="actions-buttons-container">
      <ApplyButton
        handleInputValue={handleInputValue}
        InputValue={InputValue}
        handleEmpptyValue={handleEmpptyValue}
      />
      <CancellButton />
    </div>
  );
};

export default ActionsButtons;
