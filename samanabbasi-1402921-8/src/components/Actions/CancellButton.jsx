import React from "react";
import "./CancellButton.css";

const CancellButton = ({ handleRemoveAllBtn }) => {
  let flag = false;
  const DeleteAllList = () => {
    localStorage.removeItem("Todos");
    handleRemoveAllBtn(!flag);
    flag = !flag;
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
