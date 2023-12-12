import React from "react";
import "./ActionsButtons.css";
import ApplyButton from "./ApplyButton";
import CancellButton from "./CancellButton";
const ActionsButtons = () => {
  return (
    <div className="actions-buttons-container">
      <ApplyButton />
      <CancellButton />
    </div>
  );
};

export default ActionsButtons;
