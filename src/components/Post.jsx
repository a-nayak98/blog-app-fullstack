import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post">
      <Link to={"/single-post"}>
        <div className="post-image">
          <img src={props.data.image} alt="" />
          <div className="image-overlay"></div>
        </div>
      </Link>
      <div className="post-body">
        <p className="postDate">December 15 2017</p>
        <h2>{props.data.title}</h2>
        <p className="post-data">{props.data.description}</p>
        <div className="d-flex">
          {props?.data?.tags?.map((el) => {
            return <p className="post-category">{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
