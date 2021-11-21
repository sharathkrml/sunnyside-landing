import React from "react";
import "./ClientCard.css";
function clientCard(props) {
  return (
    <div className="client-card">
      <div className="client-img">
        <img src={props.img} alt="cliImg" />
      </div>
      <div className="client-response">{props.response}</div>
      <div className="client-name">{props.name}</div>
      <div className="client-occupation">{props.occupation}</div>
    </div>
  );
}

export default clientCard;
