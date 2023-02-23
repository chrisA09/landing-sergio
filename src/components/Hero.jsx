import React from "react";
import "../css/Hero.css";

export default function Hero({ title, buttonTxt }) {
  return (
    <div className="hero">
      <div className="hero--left">
        <h1> {title} </h1>
        <button> {buttonTxt} </button>
      </div>
      <div className="hero--right">
        {/* svg */}
        svg
      </div>
    </div>
  );
}
