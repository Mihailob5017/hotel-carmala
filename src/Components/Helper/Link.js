import React from "react";
import { Link } from "react-router-dom";
const Navlinks = () => {
  return (
    <div className="navbar">
      <div className="navbar-location">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/search">
          Rooms
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navlinks;
