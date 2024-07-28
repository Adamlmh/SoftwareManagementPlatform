import React from 'react'
import styles from './shop.module.css'
import BigLittleImage from "./bigLittleImage"
import EveryoneDownLoad from './everyoneDownLoad'



export default function index() {
    return (
        <div className={styles.shop}>
            <h3 className={styles.todayfind}>今日发现</h3>
            <div className={styles.bigImage}></div>
            <BigLittleImage />
            <h3 className={styles.todayfind}>大家都在下载</h3>
            <EveryoneDownLoad />
        </div>

    )
}
