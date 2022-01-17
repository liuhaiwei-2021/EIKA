import React from "react";
import { Link } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header className="header">     
        <ul>
          <li>
            <Link to="/">
              <img alt="logo" src="/images/ikea-logo.svg" />
            </Link>
          </li>
        </ul>
    </header>
  );
}
