import React from "react";
import SeparatorSvg from "./SeparatorSvg";

import "../css/quoteSeparator.css";

export default function QuoteSeparator({ qoute }) {
  return (
    <div className="quoteSeparator--container">
      <div className="quoteSeparator--down">
        <SeparatorSvg />
      </div>
    </div>
  );
}
