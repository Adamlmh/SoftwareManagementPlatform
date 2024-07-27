import { Children, lazy } from "react";
import { Suspense } from "react";
// const Login = lazy(() => import("../pages/login"));
const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  // {
  //   path: "/login",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Login />
  //     </Suspense>
  //   ),
  // },
  {
    path:"/header",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <TopMenu />
      </Suspense>
    ),
    children: [
      {
        path: "home",
        element: <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>,
      },
      {
        path: "", element: <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense> },
    ],
  }
];

export default routes;
