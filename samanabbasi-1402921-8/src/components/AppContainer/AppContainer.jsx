import React, { useState } from "react";
import "./AppContainer.css";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import ActionsButtons from "../Actions/ActionsButtons";
import AddNewInput from "../addNewInput/AddNewInput";
import { readJSON } from "../../utils/local-storage";

const AppContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [emptyValue, setEmptyValue] = useState(false);
  const initialTodos = readJSON("Todos");
  const [newTodos, setNewTodos] = useState(
    initialTodos === null ? [] : initialTodos
  );
  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleEmptyValue = (value) => {
    setEmptyValue(value);
  };
  const handelNewTodos = (value) => {
    setNewTodos(value);
    return newTodos;
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
        handelNewTodos={handelNewTodos}
      />
    </div>
  );
};

export default AppContainer;
