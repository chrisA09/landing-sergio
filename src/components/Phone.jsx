import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Phone({ number }) {
  return (
    <div className="phone--component">
      <FaWhatsapp />
      {number}
    </div>
  );
}
