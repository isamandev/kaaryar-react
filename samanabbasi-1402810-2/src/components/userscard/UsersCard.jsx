import React from "react";
import "./UsersCard.css";
import users from "../../assets/users";

const UsersCard = () => {
  return (
    <div className="card-container">
      {users.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{
            borderColor: item.gender === "Female" ? "#F875AA" : "#00A9FF",
          }}
        >
          <div className="card__avatar">
            <img src={item.avatar} alt="users-avatar" />
          </div>
          <div className="card__full-name">
            <h2>{item.first_name}</h2>
            <h3>{item.last_name}</h3>
            <span>{item.gender}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;
