import React from "react";
import data from "../db/data.json";

export default function Day1() {
  const day = 1;
  const wordlist = data.words.filter((word) => word.day === day);

  return (
    <table>
      <tbody>
        {wordlist.map((word) => (
          <tr key={word.id}>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
