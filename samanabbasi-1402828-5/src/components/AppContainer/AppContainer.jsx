import React from "react";
import "./AppContainer.css";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import ActionsButtons from "../Actions/ActionsButtons";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Tasks />
      <ActionsButtons />
    </div>
  );
};

export default AppContainer;
