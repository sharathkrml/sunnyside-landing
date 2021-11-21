import React from "react";
import "./TextOnly.css";
function TextOnly(props) {
  return (
    <div className={`text-only ${props.elename}`}>
      <div className="text-head">{props.head}</div>
      <div className="text-body">{props.body}</div>
      <div className="learn-more">Learn more</div>
    </div>
  );
}

export default TextOnly;
