import React from "react";
import "./AppContainer.css";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import ActionsButtons from "../Actions/ActionsButtons";
import AddNewInput from "../addNewInput/AddNewInput";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Tasks />
      <AddNewInput />
      <ActionsButtons />
    </div>
  );
};

export default AppContainer;
