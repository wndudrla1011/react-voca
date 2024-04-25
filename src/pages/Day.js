import React from "react";
import { Outlet } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

function Day() {
  return (
    <div className="Home">
      <BasicLayout>
        <div>
          <Outlet />
        </div>
      </BasicLayout>
    </div>
  );
}

export default Day;
