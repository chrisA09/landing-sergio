import React from "react";
import "../css/Card.css";

export default function Card({ svg, title, txt }) {
  return (
    <div className="card--container">
      {/* doesnt require divs, all content goes in the center with a gap  */}
      {svg}
      <h3>{title}</h3>
      <p>{txt}</p>
    </div>
  );
}
