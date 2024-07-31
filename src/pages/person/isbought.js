import styles from "./person.module.css"
import { Card, Button, List } from "antd"
import { getLicense, AvailableSoftware } from "../../api"
import { useState, useEffect, version } from 'react'


const Bought = () => {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    useEffect(() => {
        async function receiveInformation() {
            try {
                const response2 = await AvailableSoftware(localStorage.getItem('userIdSf'))
                const response1 = await getLicense(localStorage.getItem('userIdSf'))
                const now = new Date(); // 当前时间
                //判断是否超过截止时间
                const filteredData1 = response1.data.filter(item => {
                    const expiredTime = new Date(item.expiredTime);
                    return expiredTime > now;
                });
                const filteredData2 = response2.data.filter(item => {
                    const expiredTime = new Date(item.expiredTime);
                    return expiredTime > now;
                });
                setData1(filteredData1)
                setData2(filteredData2)
            } catch (error) {
                console.error('Error sending verification code:', error);
            }
        }
        receiveInformation()
    }, [])

    //点击按钮事件
    const handleClick = (licenseUrl) => {
        // Create a temporary <a> element and trigger the download
        console.log('触发了点击', licenseUrl)
        const link = document.createElement('a');
        link.href = licenseUrl;
        link.download = ''; // Set the download attribute to initiate download
        link.click();
    };


    return (
        <div className={styles.bought_part}>
            <h3 className={styles.title}>已购买软件</h3>
            <div className={styles.Bought_box}>
                <Card hoverable style={{ width: '100%' }}
                    className={styles.Boughtcard}>
                    <ul className={styles.bought_content}>
                        {
                            data1 && data1.map((itemx, index) => {
                                return (
                                    <li key={index}>
                                        <List
                                            dataSource={itemx.softwareList}
                                            renderItem={(item, index) => (

                                                <List.Item>
                                                    <div className={styles.everybought}>
                                                        <div className={styles.pic} style={{ backgroundImage: `url(${data2[index].softwareImage})` }}></div>
                                                        <div className={styles.description}>
                                                            <h3 className={styles.softwaretitle}>{item.softwareName}({item.versionType ? '高级版' : '低级版'})</h3>
                                                            <div className={styles.soft_description}>  {data2[index].description.length > 40
                                                                ? `${data2[index].description.slice(0, 40)}...`
                                                                : data2[index].description}</div>
                                                        </div>
                                                        <div className={styles.update_time}>{itemx.expiredTime}</div>
                                                        {/* 用display：none修改显示按钮 */}
                                                    </div>
                                                    <Button className={styles.download} onClick={() => handleClick(itemx.licenseUrl)}>下载授权</Button>
                                                </List.Item>
                                            )}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>

                </Card>
            </div>
        </div>
    )
}
export default Bought