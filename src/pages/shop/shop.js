import React from 'react';
import styles from './shop.module.css';
import BigLittleImage from './bigLittleImage';
import EveryoneDownLoad from './everyoneDownLoad';
import Recommend from './recommend';
import Count from './count';
import Carousel from './carousel'
import { useEffect, useState } from 'react'
import { softwareRanking } from "../../api"
import { useLocation } from 'react-router-dom';

export default function Index() {
    const location = useLocation();
    const [data, setData] = useState([])
    const [lastData, setLastData] = useState([])
    const { softwareId } = location.state || {}; // 从 state 中获取参数
    console.log(softwareId)

    useEffect(() => {
        async function receiveInformation() {
            try {
                const response = await softwareRanking()
                setData(response)
                const sortedResponse = response.data.sort((b, a) => new Date(a.createTime) - new Date(b.createTime));
                console.log(sortedResponse)
                setLastData(sortedResponse)
            } catch (error) {
                console.error('Error sending verification code:', error);
            }

        }
        receiveInformation()
    }, [])


    return (
        <div className={styles.shop}>
            <h3 className={styles.todayfind}>今日发现</h3>
            <div className={styles.bigImage}>

                <Carousel lastData={lastData} />
            </div>
            <BigLittleImage lastData={lastData} />
            <h3 className={styles.todayfind}>大家都在下载</h3>
            <EveryoneDownLoad />
            <h3 className={styles.todayfind}>推荐</h3>
            <Recommend />
            <h3 className={styles.todayfind}>现实优惠</h3>
            <Count />
        </div>
    );
}