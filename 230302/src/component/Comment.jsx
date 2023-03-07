import React from "react";
import { useState } from "react";
import "./Comment.css";
const comment = (props) => {
  return (
    <div className="box">
      <img className="user-img" src="./user.png" alt="유저이미지" />
      <div className="user-flex">
        <h1 className="userName">{props.name}</h1>
        <p className="reply">{props.reply}</p>
      </div>
    </div>
  );
};

export default comment;
