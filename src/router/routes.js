import { Children, lazy } from "react";
import { Suspense } from "react";
const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));

const Login = lazy(() => import("../pages/login"))
const routes = [
  {
    path: "/header",
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
        path: "shop", element: <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  }
];

export default routes;
