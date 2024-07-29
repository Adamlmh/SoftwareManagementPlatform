import React from 'react';
import styles from './bill.module.css'
import BillInformation from "./billInformation"
import BuyAccountInformation from './buyAccountInformation'
import Textarea from './textarea'


const bill = () => {
    return (
        <div className={styles.Div}>
            <div className={styles.BigDiv}>
                <h1 className={styles.agreeBill}>确认订单</h1>
                <BillInformation />
                <h1 className={styles.buyaccout}>购买账号</h1>
                <BuyAccountInformation />
                <h1 className={styles.assess}>评价</h1>
                <Textarea />
                <h2 className={styles.cost}>订单总价：1400CNY</h2>
                <div className={styles.buybottom}>
                    <button>返回</button>
                    <button>确认订单并支付</button>
                </div>
            </div>
        </div>
    );
}

export default bill;
