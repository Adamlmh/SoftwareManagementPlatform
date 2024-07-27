import "./layout.css"
import { Layout, Menu,Input,Button } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header } = Layout;
const TopMenu=()=>{
    return(
        <Layout>
            <Header
               className="top_head"
            >
                <div className="top_title">
                    <h3>工业软件管理平台</h3>
                </div>
                <div className="top_nav">
                   <Menu className="top_menu">
                    <Menu.Item className="top_menu_item" >首页</Menu.Item>
                        <Menu.Item className="top_menu_item">商店</Menu.Item>
                        <Menu.Item className="top_menu_item">我的</Menu.Item>
                        <Menu.Item className="top_menu_item">关于我们</Menu.Item>
                   </Menu>
                </div>
                <div className="top_search">
                    <Input.Search className="top_input" placeholder="搜索"></Input.Search>
                </div>
                <div className="top_btn">
                    <Button className="linkto_register top_link_btn">注册</Button>
                    <Button className="linkto_login top_link_btn">登录</Button>
                </div>
                
            </Header>
            <div className="main_content">
                <Outlet></Outlet>
            </div>
        </Layout>
    )

}
export default TopMenu;