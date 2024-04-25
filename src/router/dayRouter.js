import { Suspense, lazy } from "react";

const Day1 = lazy(() => import("../pages/Day1"));
const Day2 = lazy(() => import("../pages/Day2"));
const Day3 = lazy(() => import("../pages/Day3"));

const dayRouter = () => {
  return [
    {
      path: "1",
      element: (
        <Suspense>
          <Day1 />
        </Suspense>
      ),
    },
    {
      path: "2",
      element: (
        <Suspense>
          <Day2 />
        </Suspense>
      ),
    },
    {
      path: "3",
      element: (
        <Suspense>
          <Day3 />
        </Suspense>
      ),
    },
  ];
};

export default dayRouter;
