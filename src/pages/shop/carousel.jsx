import React from 'react';
import { Carousel } from 'antd';
import styles from './shop.module.css';
import littleImage1 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage2 from '../../assest/images/8420455527b2e3dbb19c1e32102a1286.png';
import littleImage3 from '../../assest/images/bigImage.png';
import littleImage4 from '../../assest/images/d0e2d20ff686c5d06a5dae3d6149a639.png';
import littleImage5 from '../../assest/images/670d8aa44292f234551dc4d837c4257a.png';
import littleImage6 from '../../assest/images/09a5bdc1face7ec001ae71105bf91809.png';
const contentStyle = {

    color: '#fff',
    textAlign: 'center',
};




const carousel = () => {
    return (
        <Carousel autoplay style={contentStyle}>
            <div className={styles.carouselTitle}>
                <div>  <h1 >绝地潜兵</h1>
                    <h2 >玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人</h2></div>
                <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage1} className={styles.carouselImage} /></h3>
            </div>
            <div className={styles.carouselTitle}>
                <div>  <h1 >绝地潜兵</h1>
                    <h2 >玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人</h2></div>
                <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage5} className={styles.carouselImage} /></h3>
            </div>
            <div className={styles.carouselTitle}>
                <div>  <h1 >绝地潜兵</h1>
                    <h2 >玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人</h2></div>
                <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage6} className={styles.carouselImage} /></h3>
            </div>
            <div className={styles.carouselTitle}>
                <div>  <h1 >绝地潜兵</h1>
                    <h2 >玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人</h2></div>
                <h3 style={contentStyle} className={styles.carouselImage}><img src={littleImage4} className={styles.carouselImage} /></h3>
            </div>
        </Carousel>
    );
}

export default carousel;
