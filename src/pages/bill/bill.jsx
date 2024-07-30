import React, { useState, useEffect } from 'react';
import styles from './bill.module.css'
import BillInformation from "./billInformation"
import BuyAccountInformation from './buyAccountInformation'
import Textarea from './textarea'
import { getFingerprint } from "../../api"
import { useNavigate } from 'react-router-dom'
import { Alert } from 'antd';


const Bill = () => {
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [selectedInformation, setSelectedInformation] = useState({});
    const native = useNavigate()
    const handleFingerprintSelection = (infromation) => {
        setSelectedInformation(infromation);
    }

    useEffect(() => {
        console.log('重调', selectedInformation)
    }, [selectedInformation]);



    const desireBuy = () => {
        console.log('打算买', selectedInformation.id)
        if (!selectedInformation.id)
            setAlertTimeout(setAlert, { message: '请先选择硬件指纹', type: 'error' });
        else
            setAlertTimeout(setAlert, { message: '成功', type: 'success' });

    }
    //定时器
    const setAlertTimeout = (setter, alert, duration = 3000, type = 0) => {
        if (type == 0) {
            setter(alert)
            setTimeout(() => {
                setter({ message: '', type: "" })
            }, duration)
        }
        else {
            setter(alert)
            setTimeout(() => {
                let loginStage = 1
                setter({ message: '', type: "" })
                native('./header/home')
            }, duration)

        }
    }










    return (
        <div className={styles.Div}>
            <div className={styles.BigDiv}>
                <h1 className={styles.agreeBill}>确认订单</h1>
                <BillInformation />
                <h1 className={styles.buyaccout} >购买账号</h1>
                <BuyAccountInformation onSelectFingerprint={handleFingerprintSelection} />
                <h1 className={styles.assess}>评价</h1>
                <Textarea />
                <h2 className={styles.cost}>订单总价：1400CNY</h2>
                <div className={styles.buybottom}>
                    <button>返回</button>
                    <button onClick={desireBuy}>确认订单并支付</button>
                </div>
            </div>
            <div className={styles.alert_message}>
                {alert.message && <Alert message={alert.message} type={alert.type} className={styles.alert_message} />}
            </div>
        </div>
    );
}

export default Bill;