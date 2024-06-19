import React from "react";
import { NavLink } from "react-router-dom";

function TopNavLink(props) {
  const { href, children } = props;
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "active nav-text" : "nav-text";
      }}
      to={href}
    >
      {children}
    </NavLink>
  );
}

export default TopNavLink;
