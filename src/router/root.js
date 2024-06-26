import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Day = lazy(() => import("../pages/Day"));
const Main = lazy(() => import("../pages/Main"));
const Empty = lazy(() => import("../pages/Empty"));

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
    path: "/day/:day",
    element: (
      <Suspense>
        <Day />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense>
        <Empty />
      </Suspense>
    ),
  },
]);

export default root;
