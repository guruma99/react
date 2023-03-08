import React from "react";
import { useState } from "react";
// import "./Reply.css";

const styles = {
  wrapper: {
    display: "flex",
    margin: 8,
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 16,
  },
  imgBox: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 8,
  },
};

function Reply(props) {
  return (
    <div style={styles.wrapper} className="wrapper">
      <div className="img-box">
        <img
          style={styles.imgBox}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoe757HmIzRae_Ak3i9Z_Ih3GeOQJPeIEYg&usqp=CAU"
          alt="user-img"
        />
      </div>

      <div style={styles.contentContainer} className="content-container">
        <span className="name-text">{props.name}</span>
        <span className="comment-text">{props.comment}</span>
      </div>

      {/* 삭제버튼 */}

      <button onClick={props.onRemove}>삭제</button>

      {/* <button onClick={props.add}>추가</button> */}
    </div>
  );
}
export default Reply;
