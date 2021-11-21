import React from "react";
import "./ImageText.css";
function ImageText(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="image-text"
    >
      <div className="img-text-head">{props.head}</div>
      <div className="img-text-body">{props.body}</div>
    </div>
  );
}

export default ImageText;
