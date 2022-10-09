import React from "react";
import "../css/postitem.css";

const PostItem = ({ id, title }) => {
  return (
    <div className="postitem">
      <div className="title">
        <h3>{id}.</h3>
        <h3 className="color">{title}</h3>
      </div>
    </div>
  );
};

export default PostItem;
