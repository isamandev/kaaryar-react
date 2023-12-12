import React, { useState } from "react";
import "./AppContainer.css";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import ActionsButtons from "../Actions/ActionsButtons";
import AddNewInput from "../addNewInput/AddNewInput";

const AppContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [emptyValue, setEmptyValue] = useState(false);

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleEmptyValue = (value) => {
    setEmptyValue(value);
  };

  return (
    <div className="app-container">
      <Header />
      <Tasks />
      <AddNewInput
        handleInputValue={handleInputValue}
        emptyValue={emptyValue}
        handleEmptyValue={handleEmptyValue}
      />
      <ActionsButtons
        InputValue={inputValue}
        handleEmptyValue={handleEmptyValue}
      />
    </div>
  );
};

export default AppContainer;
