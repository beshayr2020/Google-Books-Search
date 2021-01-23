import React from "react";
import "./style.css";


export function Card(props) {
  return (
    <div className="card">
      <h3 className="margin">Results</h3>
      <div className="card-body">{props.children}</div>
    </div>
  );
}


