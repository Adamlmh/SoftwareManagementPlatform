import React from 'react';
import styles from './bill.module.css'
import { Card } from 'antd';
import BillInformation from "./billInformation"

const bill = () => {
    return (
        <div className={styles.BigDiv}>
            <h1 className={styles.agreeBill}>确认订单</h1>
            <BillInformation />
            <h1 className={styles.buyaccout}>购买账号</h1>
        </div>
    );
}

export default bill;
