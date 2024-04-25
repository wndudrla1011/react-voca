import React from "react";
import Header from "../components/Header";
import DayList from "../components/DayList";

function BasicLayout({ children }) {
  return (
    <div>
      <Header />
      <DayList />
      <div>{children}</div>
    </div>
  );
}

export default BasicLayout;
