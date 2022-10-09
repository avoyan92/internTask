import React from "react";
import { Link } from "react-router-dom";
import "../css/comment.css";

const Comment = ({ comment, commentPage }) => {
  return (
    <>
      <div className="commentpage">
        <h4>{commentPage.title}</h4>

        <p>{commentPage.body}</p>
      </div>
      <div className="comentdiv">
        <h4>Coments</h4>
        <p>{comment.body}</p>
      </div>
      <Link className="back" to="/">
        <span>
          <p>Go back</p>
        </span>
      </Link>
    </>
  );
};

export default Comment;
