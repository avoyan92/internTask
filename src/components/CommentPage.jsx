import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import "../css/comment.css";

const CommentPage = () => {
  const [commentPage, setCommentPage] = useState({});
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    
    setLoading(true);

    fetch("https://dummyjson.com/posts/" + id)
      .then((res) => res.json())
      .then((post) => setCommentPage(post));

    fetch("https://dummyjson.com/comments/" + id)
      .then((res) => res.json())
      .then((comment) => setComment(comment));
    setLoading(false);
  }, []);


  return (
    <div className="comment">
      {loading ? (
        <h1 style={{textAlign: "center"}}>Loading...</h1>
      ) : (
        <Comment comment={comment} commentPage={commentPage} />
      )}
    </div>
  );
};

export default CommentPage;
