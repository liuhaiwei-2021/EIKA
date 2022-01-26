import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">     
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
