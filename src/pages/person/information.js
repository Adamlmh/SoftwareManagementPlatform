import styles from "./person.module.css"
import {Card,Avatar,List,Input,Button} from "antd"
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
const Information = () => {
    const data = [
        {
            key: '用户名：',
            text: 'Racing car sprays burning fuel into crowd.sdfadjsfakdsjfakdsjfkadf'
        },
        {
            key: '邮箱：',
            text: 'Racing car sprays burning fuel into crowd.'
        },
        {
            key: '个性签名：',
            text: 'Racing car sprays burning fuel into crowd.'
        },
    ];
    const [disabled, setDisabled] = useState(true);
    const [userinformation, setUserinformation] = useState(data);
    return (
        <div className={styles.information_part}>
            <h3 className={styles.title}>个人信息</h3>
            <div className={styles.information_box}>
<Card hoverable style={{width:'773px'}}
className={styles.information_card}
>
    <Button className={styles.change_message}>编辑个人资料</Button>
<div className={styles.message_box}>
    <div className={styles.headbox}>
                            <Avatar size={150} icon={<UserOutlined />} />
    </div>
    <div className={styles.mymessage}>
                            <List
                                className={styles.mylist_message}
                                // className="mylist_message"
                                dataSource={userinformation}
                                renderItem={(item, index) => (
                                    <List.Item style={{ border: 'none', whiteSpace: 'nowrap' }}>
                                        <span className={styles.text_key}>{item.key}</span>
                                        {/* <Input
                                            className="text_information"
                                            // className={`${styles.text_information} ${disabled ? styles.disabledStyle : ''}`}
                                            disabled={disabled}
                                            value={item.text}
                                            // onChange={(e) => handleInputChange(index, e)}
                                        /> */}
                                        <span className={styles.myprivate}>{item.text}</span>
                                    </List.Item>
                                )}
                            />
                            <Button className={styles.myfingerprint_btn}>管理我的指纹信息</Button>
    </div>
    
</div>
</Card>
            </div>
        </div>
    )
}
export default Information