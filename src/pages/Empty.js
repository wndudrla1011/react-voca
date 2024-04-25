import React from "react";
import { Link } from "react-router-dom";

export default function Empty() {
  return (
    <>
      <h2>잘못된 접근입니다.</h2>
      <div className="back-button">
        <Link to={"/"}>돌아가기</Link>
      </div>
    </>
  );
}
