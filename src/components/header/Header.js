import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link
        className="logo-container"
        to="/"
      >
        <img
          src={Logo}
          style={{
            width: "180px",
            height: "60px"
          }}
          className="logo"
        />
      </Link>
      <div className="options">
        <Link
          className="option"
          to="/shop"
        >
          SHOP
        </Link>
        <Link
          className="option"
          to="/contact"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}
