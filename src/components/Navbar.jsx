import React from "react";
import TopNavLink from "./TopNavLink";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <TopNavLink href="/">Home</TopNavLink>
        </li>
        <li>
          <TopNavLink href="/posts">Posts</TopNavLink>
        </li>
        <li>
          <TopNavLink href="/profile">Profile</TopNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
