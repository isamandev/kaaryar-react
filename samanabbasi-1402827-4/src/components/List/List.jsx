import React from "react";
import "./List.css";
import OrderItem from "../OrderItem/OrderItem";
const List = ({ orderList }) => {
  let sortBuyPrice = orderList
    .filter((item) => item.type === "buy")
    .sort((a, b) => b.price - a.price);
  let sortSellPrice = orderList
    .filter((item) => item.type === "sell")
    .sort((a, b) => a.price - b.price);

  const maxBuyTotal = sortBuyPrice.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  const maxSellTotal = sortSellPrice.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  let buyTotal = 0;
  let sellTotal = 0;
  let maxTotal = maxBuyTotal > maxSellTotal ? maxBuyTotal : maxSellTotal;

  return (
    <div className="list-container">
      <div className="sell-container">
        {sortSellPrice.map(({ quantity, price, type }) => {
          sellTotal += quantity;
          return (
            <OrderItem
              amount={quantity}
              price={price}
              type={type}
              total={sellTotal}
              maxTotal={maxTotal}
            />
          );
        })}
      </div>
      <div className="buy-container">
        {sortBuyPrice.map(({ quantity, price, type }) => {
          buyTotal += quantity;
          return (
            <OrderItem
              amount={quantity}
              price={price}
              type={type}
              total={buyTotal}
              maxTotal={maxTotal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
