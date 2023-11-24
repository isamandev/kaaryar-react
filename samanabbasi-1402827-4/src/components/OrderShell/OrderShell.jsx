import React from "react";
import "./OrderShell.css";
import Header from "../Header/Header";
import List from "../List/List";
import orderList from "../../orders";

const OrderShell = () => {
  return (
    <div className="order-shell">
      <Header />
      <List orderList={orderList} />
    </div>
  );
};

export default OrderShell;
