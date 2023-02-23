import "../css/NavBar.css";

import React from "react";

import NavItem from "../components/NavItem";
import Phone from "../components/Phone";

export default function NavBar({ data }) {
  return (
    <div className="nav--container">
      <div className="nav--left">
        <div className="logo">logo</div>
        <Phone number={data[0].extra.telefono} />
      </div>
      <div className="nav--right">
        {data.map((item) => (
          <NavItem index={item.id} item={item.item} />
        ))}
      </div>
    </div>
  );
}
