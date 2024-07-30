import React from 'react';
import styles from './bill.module.css'
import { Card } from 'antd';

const buyAccountInformation = () => {
    return (
        <div className={styles.buyAccountInformation}>
            <div>
                <ul>
                    <li>用户名</li>
                    <li>电子邮件地址</li>
                    <li>授权账户ID</li>
                    <li>指纹信息</li>
                </ul>
                <ul>
                    <li>用户名</li>
                    <li>1231234567@xxx.com</li>
                    <li>20002951</li>
                    <li><button>选择你的指纹信息</button></li>
                </ul>
            </div>
            <div>
                <Card
                    style={{
                        width: 200,
                        height: 200
                    }}
                >
                    <span className={styles.rihgtCardWord}>当您完成此笔交易后，款项会自您的支付方式中扣除，且您将收到一封电子邮件确认您的购买。</span>
                </Card>

            </div>
        </div>
    );
}

export default buyAccountInformation;
