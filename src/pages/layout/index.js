import "./layout.css";
import { useEffect } from 'react'
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import TopHeader from "./topheader";
import BottomFooter from "./bottomfooter";
import { homePageUserInfo } from '../../api/index'
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
