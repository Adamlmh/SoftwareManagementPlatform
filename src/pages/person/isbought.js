import styles from "./person.module.css"
import { Card, Button, List } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
];
const Bought = () => {

    return (
        <div className={styles.bought_part}>
            <h3 className={styles.title}>已购买软件</h3>
            <div className={styles.Bought_box}>
                <Card hoverable style={{ width: '100%' }}
                    className={styles.Boughtcard}>
                    <div className={styles.bought_content}>
                        <List

                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className={styles.everybought}>
                                        <div className={styles.pic}></div>
                                        <div className={styles.description}>
                                            <h3 className={styles.softwaretitle}>元气骑士（基础版）</h3>
                                            <div className={styles.soft_description}>这款打宝闯关两不误，休闲轻松很惬意的ARPG游戏，你一定不能错过！</div>
                                        </div>
                                        <div className={styles.update_time}>
                                            2024-06-16-2025-06-16
                                        </div>
                                        {/* 用display：none修改显示按钮 */}
                                       <Button className={styles.download}>下载</Button>
                                       <Button className={styles.update}>更新 <span className={styles.btn_cue}></span></Button>
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
export default Bought