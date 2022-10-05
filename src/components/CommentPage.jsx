import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/comment.css";

const CommentPage = () => {
  const [commentPage, setCommentPage] = useState({});
  const [comment, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      await fetch("https://dummyjson.com/posts/" + id)
        .then((res) => res.json())
        .then((post) => setCommentPage(post));
    }

    fetchPost();

    fetch("https://dummyjson.com/comments/" + id)
      .then((res) => res.json())
      .then((comment) => setComment(comment));
  }, []);

  return (
    <div className="comment">
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
          {" "}
          <p>Go back</p>
        </span>
      </Link>
    </div>
  );
};

export default CommentPage;
