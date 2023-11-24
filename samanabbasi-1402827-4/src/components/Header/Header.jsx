import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-titles">
        <h2>Sell</h2>
        <h2>Buy</h2>
      </div>
      <div className="cells-headers">
        <span>Total (SAT)</span>
        <span>Amount (SAT)</span>
        <span>PRICE (RIAL)</span>
        <span>Amount (SAT)</span>
        <span>Total(SAT)</span>
      </div>
    </div>
  );
};

export default Header;
