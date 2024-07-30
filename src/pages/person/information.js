import styles from "./person.module.css"
import { Card, Avatar, List, Input, Button,Modal } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect,useRef } from "react";
const Information = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userId, setUserId] = useState(localStorage.getItem('userIdSf'))
    const [email, setEmail] = useState(localStorage.getItem('emailSf'))
    const [myDescription, setMyDescription] = useState('哥哥别钓我')
    const data = [
        {
            key: '用户名：',
            text: `${userId ? userId : '帅哥'}`
        },
        {
            key: '邮箱：',
            text: `${email ? email : '1311471185@qq.com'}`
        },
        {
            key: '个性签名：',
            text: myDescription
        },
    ];
    // const [disabled, setDisabled] = useState(true);
    const [userinformation, setUserinformation] = useState(data);
    const userIdRef=useRef(null)
    const emailRef=useRef(null)
    const descriptionRef=useRef(null)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log(userIdRef.current.input.value);
        
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={styles.information_part}>
            <h3 className={styles.title}>个人信息</h3>
            <div className={styles.information_box}>
                <Card hoverable style={{ width: '773px' }}
                    className={styles.information_card}
                >
                    <Button className={styles.change_message} onClick={showModal}>编辑个人资料</Button>
                    <div className={styles.message_box}>
                        <div className={styles.headbox}>
                            <Avatar size={150} icon={<UserOutlined />} />
                            <Input type="file" style={{
                                zIndex: '100',
                                position: 'absolute',
                                width: '150px',
                                height: '150px',
                                borderRadius: '150px',
                                opacity: 0,
                                cursor: 'pointer'
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
                            {/* 编辑个人信息 */}
                            <Modal title="修改个人信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                               <div className={styles.change_message_modal}>
                                    <Input className={styles.change_input} value={userId} ref={userIdRef}></Input>
                                    <Input className={styles.change_input} value={email} ref={emailRef}></Input>
                                    <Input className={styles.change_input} value={data[2].text} ref={descriptionRef}></Input>
                               </div>
                            </Modal>
                        </div>

                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Information