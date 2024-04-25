import React from "react";
import { Outlet, useParams } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import data from "../db/data.json";

function Day() {
  const { day } = useParams();
  const wordlist = data.words.filter((word) => word.day === Number(day));

  return (
    <div className="Home">
      <BasicLayout>
        <h2>Day {day}</h2>
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
      </BasicLayout>
    </div>
  );
}

export default Day;
