import { lazy } from "react";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import FullScreenLoading from "../components/fullScreenLoading";
const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));
const Shop = lazy(() => import("../pages/shop/shop"));
const Login = lazy(() => import("../pages/login"));
const AboutUs = lazy(() => import("../pages/aboutus"));
const Shopsoftware = lazy(() => import("../pages/shopsoftware/shopsoftware"));

const routes = [
  {
    path: "/header",
    element: (
      <Suspense fallback={<FullScreenLoading />}>
        <TopMenu />
      </Suspense>
    ),
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
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<FullScreenLoading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/header/home" />,
  },
];

export default routes;
