import React from "react";
import { useState } from "react";
import "./Reply.css";

function Reply(props) {
  return (
    <div className="wrapper">
      <div className="img-box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoe757HmIzRae_Ak3i9Z_Ih3GeOQJPeIEYg&usqp=CAU"
          alt="user-img"
        />
      </div>

      <div className="content-container">
        <span className="name-text">{props.name}</span>
        <span className="comment-text">{props.comment}</span>
      </div>
    </div>
  );
}
export default Reply;
