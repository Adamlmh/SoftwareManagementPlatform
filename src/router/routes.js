import { lazy } from "react";
import { Suspense } from "react";
// const Login = lazy(() => import("../pages/login"));
const TopMenu = lazy(() => import("../pages/layout"));

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
  }
];

export default routes;
