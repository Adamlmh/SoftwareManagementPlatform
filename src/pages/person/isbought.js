import styles from "./person.module.css"
import { Card, Button, List } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
const data = [
    {
        softwareList: [
            {
                softwareName: '感觉不如',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }, {
                softwareName: '鸣鸣鸣',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }
        ],
        expiredTime: ' 2024-06-16-2025-06-16',
        licenseUrl: '#'
    },
    {
        softwareList: [
            {
                softwareName: '潮潮潮',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }, {
                softwareName: '原原神神',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }
        ],
        expiredTime: ' 2024-06-16-2025-06-16',
        licenseUrl: '#'
    },
    {
        softwareList: [
            {
                softwareName: '鸣鸣鸣',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }, {
                softwareName: '鸣鸣鸣',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            },
            {
                softwareName: '鸣鸣鸣',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            },
            {
                softwareName: '潮潮潮',
                versionType: '版版本本',
                expiredTime: ' 2024-06-16-2025-06-16'

            }
        ],
        expiredTime: ' 2024-06-16-2025-06-16',
        licenseUrl: '#'
    },


];
const Bought = () => {

    console.log(data)


    return (
        <div className={styles.bought_part}>
            <h3 className={styles.title}>已购买软件</h3>
            <div className={styles.Bought_box}>
                <Card hoverable style={{ width: '100%' }}
                    className={styles.Boughtcard}>
                    <ul className={styles.bought_content}>
                        {
                            data && data.map((item) => {
                                return (
                                    <li>
                                        <List
                                            dataSource={item.softwareList}
                                            renderItem={(item) => (
                                                <List.Item>
                                                    <div className={styles.everybought}>
                                                        <div className={styles.pic}></div>
                                                        <div className={styles.description}>
                                                            <h3 className={styles.softwaretitle}>{item.softwareName}</h3>
                                                            <div className={styles.soft_description}>这款打宝闯关两不误，休闲轻松很惬意的ARPG游戏，你一定不能错过！</div>
                                                        </div>
                                                        <div className={styles.update_time}>
                                                            {item.expiredTime}
                                                        </div>
                                                        {/* 用display：none修改显示按钮 */}
                                                    </div>
                                                    <Button className={styles.download}>下载授权</Button>

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