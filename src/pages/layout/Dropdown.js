import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./Dropdown.css"; // 引入你的 CSS 文件
import { NavLink } from "react-router-dom";
{
  /* <NavLink to={"/header/shop"}> */
}
{
  /* </NavLink> */
}
const items = [
  {
    key: "1",
    label: <NavLink to={"/header/shop"}>商店首页</NavLink>,
  },
  {
    key: "2",
    label: <NavLink to={"/header/allsoftware"}>全部软件</NavLink>,
  },
];
const StoreDropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
    overlayClassName="custom-dropdown" // 添加自定义类名
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        商店
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default StoreDropDown;
