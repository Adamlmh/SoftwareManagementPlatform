import React from 'react';
import styles from './shop.module.css'
import littleImage1 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage2 from '../../assest/images/8420455527b2e3dbb19c1e32102a1286.png';
import littleImage3 from '../../assest/images/bigImage.png';
import littleImage4 from '../../assest/images/d0e2d20ff686c5d06a5dae3d6149a639.png';

const bigLittleImage = () => {
    return (
        <ul className={styles.smallImages}>
            <li className={styles.smallImages_li}>
                <div>
                    <img src={littleImage1} />
                </div>
                <div>
                    <h2>绝地潜兵</h2>
                    <div className={styles.tages}>
                        <ul>
                            <li>标签</li>
                            <li>标签</li>
                            <li>标签</li>
                        </ul>
                        <div>5.0</div>
                    </div>
                    <p>玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人</p>
                </div>
            </li>
            <li className={styles.smallImages_li}>
                <div >
                    <img src={littleImage2} />
                </div>
                <div>
                </div>
            </li>
            <li className={styles.smallImages_li}>
                <div >
                    <img src={littleImage3} />
                </div>
                <div>
                </div>
            </li>
            <li className={styles.smallImages_li}>
                <div >
                    <img src={littleImage4} />
                </div>
                <div>
                </div>
            </li>
        </ul>
    );
}

export default bigLittleImage;
