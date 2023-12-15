import React from "react";
import "./CancellButton.css";

const CancellButton = ({ handelNewTodos }) => {
  const DeleteAllList = () => {
    localStorage.clear("Todos");
    handelNewTodos(null);
  };
  return (
    <>
      <button className="cancell-button button" onClick={DeleteAllList}>
        حذف همه
      </button>
    </>
  );
};

export default CancellButton;
