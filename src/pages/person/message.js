import styles from "./person.module.css"
import { Card, Button, List } from "antd"
import { checkLatestSoftware } from "../../api"
import { useState, useEffect } from 'react'
const data = [
    {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "",
        "versionType": 1,
        "softwareImage": "string"
    },
    {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 0,
        "softwareImage": "string"
    },
    {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 1,
        "softwareImage": "string"
    },
    {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 0,
        "softwareImage": "string"
    }, {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 0,
        "softwareImage": "string"
    }, {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 1,
        "softwareImage": "string"
    }, {
        "softwareId": 0,
        "softwareName": "好玩的游戏",
        "version": "string",
        "versionType": 1,
        "softwareImage": "string"
    },
];
const MyMessage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function receiveInformation() {
            try {
                const response = await checkLatestSoftware(localStorage.getItem('userIdSf'))
                if (response.data)
                    setData(response.data)
            } catch (error) {
                console.error('Error sending verification code:', error);
            }
        }
        receiveInformation()
    }, [])


    return (
        <div className={styles.mymessage_part}>
            <h3 className={styles.title}>更新</h3>
            <div className={styles.myprivate_box}>
                <Card hoverable style={{ width: '100%' }}
                    className={styles.privatecard}>
                    <div className={styles.private_content}>
                        <List
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className={styles.everymessage}>
                                        <div className={styles.detail}> <span className={styles.cue}></span>{item.softwareName}</div>
                                        <div className={styles.detail_right}>
                                            <div className={styles.messagetime}>版本号：{item.version}</div>
                                            <div className={styles.disknow}>
                                                {
                                                    item.versionType ? <Button className={styles.highVersion}>高级版</Button> : <Button className={styles.normalVersion}>普通版</Button>
                                                }


                                            </div>
                                            {/* 已读 颜色变换类名 isknow和disknow */}
                                        </div>
                                    </div>

                                </List.Item>
                            )}
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default MyMessage