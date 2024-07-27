import "./layout.css"
import { Layout, Menu,Input,Button } from 'antd';
import { Outlet } from 'react-router-dom';
import TopHeader from "./topheader";
const TopMenu=()=>{
    return(
        <Layout>
          <TopHeader></TopHeader>
            <div className="main_content">
                <Outlet></Outlet>
            </div>
            
        </Layout>
    )

}
export default TopMenu;