import React from 'react';
import styles from './bill.module.css'
import { Card } from 'antd';

const billInformation = () => {
    return (
        <Card
            style={{
                width: '1118px',
                height: '208px'
            }} className={styles.billInformation}
        >
            <div className={styles.billInformationDiv}>
                <ul>
                    <li>
                        <div>产品信息</div>
                        <div>产品名字</div>
                    </li>
                    <li>
                        <div>时限</div>
                        <div>起始时间-过期时间</div>
                    </li>
                    <li>
                        <div>产品信息</div>
                        <div>1，400CNY</div>
                    </li>
                    <li>
                        <div>商品价格</div>
                        <div>1</div>
                    </li>
                    <li>
                        <div>产品信息</div>
                        <div>1，400CNY</div>
                    </li>
                </ul>
                <ul>
                    <li>总计</li>
                    <li>1，400CNY</li>
                </ul>
            </div>
        </Card>
    );
}

export default billInformation;
