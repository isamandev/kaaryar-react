import React from "react";
import "./Bottons.css";

const Bottons = ({
  as = "Button",
  looks = "Primary",
  variants = "Filled",
  size = "Medium",
  type = "Button",
  disabled = false,
  href = null,
  target = null,
  className = null,
  onClick = null,
  children,
}) => {
  const checkAs = () => {
    if (as === "a") {
      return (
        <a
          href={href}
          target={target === null ? null : `_${target}`}
          className={`button ${looks} ${variants} ${size} ${
            className === null ? "" : className
          } ${disabled === false ? "" : "disabled"}`}
          onClick={onClick}
        >
          {children}
        </a>
      );
    } else {
      return (
        <button
          type={type}
          className={`button ${looks} ${variants} ${size} ${
            className === null ? "" : className
          } ${disabled === false ? "" : "disabled"}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  };
  return checkAs();
};

export default Bottons;
