import React from "react";
import "./Comments.css";
import UserComment from "../userComment/UserComment";
import commentsData from "../../comments";

const Comments = () => {
  return (
    <div className="comments-container">
      <h1>نظرات</h1>
      <hr />
      {commentsData.map(({ id, parentId, text }) => {
        if (parentId === null) {
          return (
            <UserComment
              key={id}
              id={id}
              text={text}
              commentsData={commentsData}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Comments;
