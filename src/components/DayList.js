import React from "react";
import dummy from "../db/data.json";
import { Link } from "react-router-dom";

function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <Link className="day" key={day.id} to={`/day/${day.day}`}>
          Day {day.day}
        </Link>
      ))}
    </ul>
  );
}

export default DayList;
