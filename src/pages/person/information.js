import styles from "./person.module.css"
import {Card,Avatar,List,Input,Button} from "antd"
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
const Information = () => {
    const userId = localStorage.getItem('userId')
    const email=localStorage.getItem('email')
    const data = [
        {
            key: '用户名：',
            text: `${userId ? userId :'1311471185@qq.com'}`
        },
        {
            key: '邮箱：',
            text: `${email ? email : ''}`
        },
        {
            key: '个性签名：',
            text: '宝'
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
                            <Input type="file" style={{
                                zIndex:'100',
                                position:'absolute',
                                width:'150px',
                                height:'150px',
                                borderRadius:'150px',
                                opacity:0,
                                cursor:'pointer'
                            }}></Input>
    </div>
    <div className={styles.mymessage}>
                            <List
                                className={styles.mylist_message}
                                // className="mylist_message"
                                dataSource={userinformation}
                                renderItem={(item, index) => (
                                    <List.Item style={{ border: 'none', whiteSpace: 'nowrap' }}>
                                        <span className={styles.text_key}>{item.key}{item.text}</span>
                                        {/* <Input
                                            className="text_information"
                                            // className={`${styles.text_information} ${disabled ? styles.disabledStyle : ''}`}
                                            disabled={disabled}
                                            value={item.text}
                                            // onChange={(e) => handleInputChange(index, e)}
                                        /> */}
                                        
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