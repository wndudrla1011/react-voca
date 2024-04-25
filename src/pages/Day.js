import React from "react";
import { useParams } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import data from "../db/data.json";
import Word from "../components/Word";

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
              <Word word={word} key={word.id} />
            ))}
          </tbody>
        </table>
      </BasicLayout>
    </div>
  );
}

export default Day;
