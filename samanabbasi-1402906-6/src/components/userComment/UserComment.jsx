import React from "react";
import "./UserComment.css";
import SubComment from "../subComment/SubComment";

const UserComment = ({ id, text, commentsData }) => {
  const result = commentsData.filter((comment) => comment.parentId === id);

  return (
    <div className="user-comments-container">
      <div className="user-comment-container">
        <div className="user-comment__header">
          <span>{id} گفته:</span>
          <button>پاسخ دادن</button>
        </div>
        <hr />
        <div className="user-comment__body">
          <p>{text}</p>
        </div>
        {result.map((comments) => (
          <SubComment
            id={comments.id}
            text={comments.text}
            commentsData={commentsData}
          />
        ))}
      </div>
    </div>
  );
};

export default UserComment;
