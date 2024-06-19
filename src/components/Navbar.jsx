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
          <ul>
            <li>
              <TopNavLink href="/posts/create">Create a new post</TopNavLink>
            </li>
          </ul>
        </li>

        <li>
          <TopNavLink href="/profile">Profile</TopNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
