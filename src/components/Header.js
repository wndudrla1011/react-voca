import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to={"/"}>토익 영단어</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          단어 추가
        </a>
        <a href="#x" className="link">
          Day 추가
        </a>
      </div>
    </div>
  );
}

export default Header;
