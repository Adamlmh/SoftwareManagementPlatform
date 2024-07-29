import "./layout.css";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import TopHeader from "./topheader";
import BottomFooter from "./bottomfooter";
const TopMenu = () => {
  return (
    <Layout>
      <TopHeader></TopHeader>
      <div className="main_content">
        <Outlet></Outlet>
      </div>
      <BottomFooter></BottomFooter>
    </Layout>
  );
};
export default TopMenu;
