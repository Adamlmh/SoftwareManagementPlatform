import React from 'react'
import styles from './shop.module.css'
import littleImage1 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage2 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage3 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage4 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import BigLittleImage from "./bigLittleImage"


export default function index() {
    return (
        <div className={styles.shop}>
            <h3 className={styles.todayfind}>今日发现</h3>
            <div className={styles.bigImage}></div>
            <BigLittleImage />
        </div>

    )
}
