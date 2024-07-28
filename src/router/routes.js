import { Children, lazy } from "react";
import { Suspense } from "react";
const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));
const Shop = lazy(() => import("../pages/shop/shop"))
const Login = lazy(() => import("../pages/login"))
const AboutUs = lazy(() => import("../pages/aboutus"))
const Shopsoftware = lazy(() => import("../pages/shopsoftware/shopsoftware"))


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
          <Shop />
        </Suspense>
      },
      {
        path: "about", element: <Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
        </Suspense>
      },
      {
        path: "", element: <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      }, {
        path: "shopsoftware", element: <Suspense fallback={<div>Loading...</div>}>
          <Shopsoftware />
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
