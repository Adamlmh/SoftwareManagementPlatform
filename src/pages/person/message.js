import styles from "./person.module.css"
import { Card,  Button,List } from "antd"
import { DeleteOutlined  } from '@ant-design/icons';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const MyMessage = () => {
    
    return (
        <div className={styles.mymessage_part}>
            <h3 className={styles.title}>消息</h3>
            <div className={styles.myprivate_box}>
            <Card hoverable style={{width:'100%'}}
            className={styles.privatecard}>
                <div className={styles.private_content}>
                        <List
                            
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className={styles.everymessage}>
                                        <div className={styles.detail}> <span className={styles.cue}></span>{item}</div>
                                        <div className={styles.detail_right}>
                                            <div className={styles.messagetime}>2024-06-20 10:58</div>
                                            {/* 已读 颜色变换类名 isknow和disknow */}
                                            <div className={styles.disknow}>已读</div>
                                            <Button className={styles.delete} icon={<DeleteOutlined />}></Button>
                                        </div>
                                    </div>
                                     
                                </List.Item>
                            )}
                        />
                        
                </div>
                    <Button className={styles.pagebtn}>换页</Button>
            </Card>
            </div>
        </div>
    )
}
export default MyMessage