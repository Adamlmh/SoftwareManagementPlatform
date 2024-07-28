import React, { useState } from 'react';
import styles from './shop.module.css'
import littleImage1 from '../../assest/images/9e748038ad0f0b055344736f61190665.png';


const Count = () => {
    const [data, setData] = useState([
        {
            image: littleImage1,
            titll: '心动小镇',
            time: '优惠时间：8.1-8.8',
            count: '折扣：80%'
        },
        {
            image: littleImage1,
            titll: '心动小镇',
            time: '优惠时间：8.1-8.8',
            count: '折扣：80%'
        },
        {
            image: littleImage1,
            titll: '心动小镇',
            time: '优惠时间：8.1-8.8',
            count: '折扣：80%'
        },
    ])



    return (
        <ul className={styles.countUl}>
            {
                data.map((item, index) => {
                    return (
                        <li>
                            <div><img src={item.image} /></div>
                            <div>
                                <div>
                                    <h2>{item.titll}</h2>
                                    <p>{item.time}</p>
                                    <p><div>{item.count}</div></p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }



        </ul>
    );
}

export default Count;
