import React from "react";
import "./OrderItem.css";

const OrderItem = ({ amount, price, type, total, maxTotal }) => {
  const totalPer = ((total / maxTotal) * 100).toFixed(1).toString();
  console.log("total" + totalPer);
  const sellStyle = {
    backgroundImage: `linear-gradient(280deg, red 0%, #ff000000 ${totalPer}%)`,
  };
  const buyStyle = {
    backgroundImage: `linear-gradient(90deg, green 0%, #ff000000 ${totalPer}%)`,
  };
  return (
    <>
      {type === "sell" ? (
        <div className="order">
          <span>{total}</span>
          <span>{amount}</span>
          <span className="sell-price" style={sellStyle}>
            {price}
          </span>
        </div>
      ) : (
        <div className="order">
          <span className="buy-price" style={buyStyle}>
            {price}
          </span>
          <span>{amount}</span>
          <span>{total}</span>
        </div>
      )}
    </>
  );
};

export default OrderItem;
