import "./layout.css";
import { useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import TopHeader from "./topheader";
import BottomFooter from "./bottomfooter";
import { homePageUserInfo } from "../../api/index";
import { useState } from "react";
const TopMenu = () => {
  const [shoppingOrder, setShoppingOrder] = useState([]);

  useEffect(() => {
    async function receiveInformation() {
      try {
        const response = await homePageUserInfo(
          localStorage.getItem("userIdSf")
        );
        console.log(response.data);
        localStorage.setItem("userName", response.data.username);
        localStorage.setItem("userImage", response.data.image);
      } catch (error) {
        console.error("Error sending verification code:", error);
      }
    }
    receiveInformation();
  }, []);

  return (
    <Layout>
      <TopHeader></TopHeader>
      <div className="main_content">
        <Outlet context={{ shoppingOrder, setShoppingOrder }}></Outlet>
      </div>
      <BottomFooter></BottomFooter>
    </Layout>
  );
};
export default TopMenu;
