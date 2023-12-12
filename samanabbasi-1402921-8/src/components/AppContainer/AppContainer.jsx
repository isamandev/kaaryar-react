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
  const handleEmpptyValue = (value) => {
    setEmptyValue(value);
  };
  console.log(emptyValue);
  return (
    <div className="app-container">
      <Header />
      <Tasks />
      <AddNewInput
        handleInputValue={handleInputValue}
        emptyValue={emptyValue}
        handleEmpptyValue={handleEmpptyValue}
      />
      <ActionsButtons
        InputValue={inputValue}
        handleEmpptyValue={handleEmpptyValue}
      />
    </div>
  );
};

export default AppContainer;
