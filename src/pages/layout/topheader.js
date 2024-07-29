import "./layout.css";
import { Layout, Menu, Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import StoreDropDown from "./Dropdown";
const { Header } = Layout;
const TopHeader = () => {
  return (
    <Header className="top_head">
      <div className="top_title">
        <h3>工业软件管理平台</h3>
      </div>
      <div className="top_nav">
        <Menu className="top_menu">
          <NavLink to={"/"}>
            <Menu.Item className="top_menu_item">首页</Menu.Item>
          </NavLink>
          <Menu.Item className="top_menu_item">
            <StoreDropDown />
          </Menu.Item>

          <NavLink to={"/header/"}>
            <Menu.Item className="top_menu_item">我的</Menu.Item>
          </NavLink>
          <NavLink to={"/header/about"}>
            <Menu.Item className="top_menu_item">关于我们</Menu.Item>
          </NavLink>
        </Menu>
      </div>
      <div className="top_search">
        <Input.Search className="top_input" placeholder="搜索"></Input.Search>
      </div>
      <div className="top_btn">
        <NavLink to={"/login"}>
          <Button className="linkto_register top_link_btn">注册</Button>
          <Button className="linkto_login top_link_btn">登录</Button>
        </NavLink>
      </div>
    </Header>
  );
};
export default TopHeader;
