import React from 'react'
import styles from './shop.module.css'
import BigLittleImage from "./bigLittleImage"
import EveryoneDownLoad from './everyoneDownLoad'
import Recommend from './recommend'
import Count from './count'


export default function index() {
    return (
        <div className={styles.shop}>
            <h3 className={styles.todayfind}>今日发现</h3>
            <div className={styles.bigImage}></div>
            <BigLittleImage />
            <h3 className={styles.todayfind}>大家都在下载</h3>
            <EveryoneDownLoad />
            <h3 className={styles.todayfind}>推荐</h3>
            <Recommend />
            <h3 className={styles.todayfind}>现实优惠</h3>
            <Count />
        </div>

    )
}
