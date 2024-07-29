import { basicSoftwareInfo, detailedSoftwareInfo } from "../../api"
import SoftwareName from "./softwarename"
import Update from "./updata"
import styles from "./verifybill.module.css"
import CommonVersion from "./commonversion"
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const VerifyBill=()=>{
    const location = useLocation();  
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('softwareId'); // 获取 softwareid 的值 
    const [softwareId, setSoftwareId] = useState(id)
    // 存软件信息
    const [data,setData]=useState({})
    // 存软件版本
    const [version,setVersion]=useState({description:'',version:'',versionType:''})
    // 是否有高级版
    const [isadvanced, setAdvanced] = useState(false)
 
    useEffect(() => {
        // 使用 URLSearchParams 提取查询参数  
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('softwareId'); // 获取 softwareid 的值  
        if (id) {
            setSoftwareId(id); // 同时更新传入的 setSoftwareId 函数  
            // console.log(id);
        }
        // 获取软件信息
        const fetchSoftwareData = async () => {
            try {

                const response = await basicSoftwareInfo(softwareId);
                const responseVersion = await detailedSoftwareInfo(softwareId);
                
                setData(response.data)
                setVersion(responseVersion.data)
                setAdvanced(responseVersion.data[1] ? true : false);
                
                // console.log(response);
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchSoftwareData();
    }, [location.search, setSoftwareId]); 
    
    return(
        <div className={styles.verifybill}>
            <SoftwareName image={data.softwareImage}
                description={data.description}
                name={data.softwareName}
></SoftwareName>
            <CommonVersion 
            version="基础版"
            description={version[0]?.description}
            name={data.softwareName}
            time={data.createTime}
            allversion={version[0]?.version}
            status={version[0]?.versionType} ></CommonVersion>
            {isadvanced && <CommonVersion version="高级版"
                description={version[1]?.description}
                allversion={version[1]?.version} 
                name={data.softwareName}
                time={data.createTime}
                status={version[1]?.versionType} ></CommonVersion>}
            <Update></Update>
        </div>
    )
}

export default VerifyBill;