import React, { useState } from "react";

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <tr key={word.id}>
      <td>
        <input type="checkbox" checked={word.isDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;
