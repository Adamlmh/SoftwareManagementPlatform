import { lazy } from "react";

import { Navigate } from "react-router-dom";

const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));
const Shop = lazy(() => import("../pages/shop/shop"));
const Login = lazy(() => import("../pages/login"));
const AboutUs = lazy(() => import("../pages/aboutus"));
const Shopsoftware = lazy(() => import("../pages/shopsoftware/shopsoftware"));
const AllSoftware = lazy(() => import("../pages/allSoftware"));

const routes = [
  {
    path: "/header",
    element: <TopMenu />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "allsoftware",
        element: <AllSoftware />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/header/home" />,
  },
];

export default routes;
