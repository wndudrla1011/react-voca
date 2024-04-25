import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import dayRouter from "./dayRouter";

const Day = lazy(() => import("../pages/Day"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense>
        <Day />
      </Suspense>
    ),
  },
  {
    path: "/day",
    element: (
      <Suspense>
        <Day />
      </Suspense>
    ),
    children: dayRouter(),
  },
]);

export default root;
