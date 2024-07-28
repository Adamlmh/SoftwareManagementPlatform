import React from 'react';
import styles from './shop.module.css';
import BigLittleImage from './bigLittleImage';
import EveryoneDownLoad from './everyoneDownLoad';
import Recommend from './recommend';
import Count from './count';
import { Carousel } from 'antd';
import littleImage1 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage2 from '../../assest/images/8420455527b2e3dbb19c1e32102a1286.png';
import littleImage3 from '../../assest/images/bigImage.png';
import littleImage4 from '../../assest/images/d0e2d20ff686c5d06a5dae3d6149a639.png';
import littleImage5 from '../../assest/images/670d8aa44292f234551dc4d837c4257a.png';
import littleImage6 from '../../assest/images/09a5bdc1face7ec001ae71105bf91809.png';

const contentStyle = {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    height: '100vh'
};



export default function Index() {
    return (
        <div className={styles.shop}>
            <h3 className={styles.todayfind}>今日发现</h3>
            <div className={styles.bigImage}>
                <Carousel autoplay style={contentStyle}>
                    <div>
                        <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage1} className={styles.carouselImage} /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage5} className={styles.carouselImage} /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage6} className={styles.carouselImage} /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage4} className={styles.carouselImage} /></h3>
                    </div>
                </Carousel>
            </div>
            <BigLittleImage />
            <h3 className={styles.todayfind}>大家都在下载</h3>
            <EveryoneDownLoad />
            <h3 className={styles.todayfind}>推荐</h3>
            <Recommend />
            <h3 className={styles.todayfind}>现实优惠</h3>
            <Count />
        </div>
    );
}