import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "black" : "red",
    };
  };

  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/"}>
        <h3 className="nav">Home</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h3 className="nav">About</h3>
      </NavLink>
      <NavLink style={navLinkStyles}  to={"/contact"}>
        <h3 className="nav">Contact</h3>
      </NavLink>
    </div>
  );
};

export default Header;
