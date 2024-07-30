import { lazy } from "react";

import { Navigate } from "react-router-dom";

const TopMenu = lazy(() => import("../pages/layout"));
const Home = lazy(() => import("../pages/home"));
const Shop = lazy(() => import("../pages/shop/shop"));
const Login = lazy(() => import("../pages/login"));
const AboutUs = lazy(() => import("../pages/aboutus"));
const Bill = lazy(() => import("../pages/bill/bill"));
const VerifyBill = lazy(() => import("../pages/verifybill/verifybill"));
const AllSoftware = lazy(() => import("../pages/allSoftware"));
const Person = lazy(() => import("../pages/person"));
const Subscription = lazy(() => import("../pages/subscription"));

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
      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "verifybill",
        element: <VerifyBill />,
      },

      {
        path: "person",
        element: <Person />,
      },
      {
        path: "subscription",
        element: <Subscription />,
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
