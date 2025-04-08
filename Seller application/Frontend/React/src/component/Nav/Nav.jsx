import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="sidebar">
        <div className='Home'>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="profile">
          <NavLink to="/Profile">Profile</NavLink>
        </div>
        <div className="stores">
          <NavLink to="/Your Stores">Your Stores</NavLink>
        </div>
        <div className="build_store">
          <NavLink to="/Build Your Store">Build your Store</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
