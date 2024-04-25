import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import dayRouter from "./dayRouter";

const Day = lazy(() => import("../pages/Day"));
const Main = lazy(() => import("../pages/Main"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense>
        <Main />
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
