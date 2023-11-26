import React from "react";
import "./SubComment.css";

const SubComment = ({ id, text, commentsData }) => {
  const subCommentWidth = {
    width: "90%",
  };
  const result = commentsData.filter((comment) => comment.parentId === id);
  return (
    <div className="user-sub-comments-container" style={subCommentWidth}>
      <div className="user-sub-comment-container">
        <div className="user-sub-comment__header">
          <span>{id} گفته:</span>
          <button>پاسخ دادن</button>
        </div>
        <hr />
        <div className="user-sub-comment__body">
          <p>{text}</p>
        </div>
        {result.map((sub) => (
          <SubComment
            key={sub.id}
            id={sub.id}
            text={sub.text}
            width={sub.width}
            commentsData={commentsData}
          />
        ))}
      </div>
    </div>
  );
};

export default SubComment;
