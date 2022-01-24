import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* Semantics -1 */}
      {/* If we only have 1 link then is not a list (group of items) */}
      <ul>
        <li>
          <Link to="/">
            <img alt="logo" src="/assets/images/logo.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
