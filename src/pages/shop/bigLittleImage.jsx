import React, { useState } from 'react';
import styles from './shop.module.css'
import littleImage1 from '../../assest/images/827e3278ed3118dabc56ae91afec721e.png';
import littleImage2 from '../../assest/images/8420455527b2e3dbb19c1e32102a1286.png';
import littleImage3 from '../../assest/images/bigImage.png';
import littleImage4 from '../../assest/images/d0e2d20ff686c5d06a5dae3d6149a639.png';





const BigLittleImage = () => {
    const [data, setData] = useState([
        {
            image: littleImage1,
            titll: '绝地潜兵',
            tag1: '标签',
            tag2: '标签',
            tag3: '标签',
            score: '5.0',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        },
        {
            image: littleImage2,
            titll: '麻布仔大冒险',
            tag1: '标签',
            tag2: '标签',
            tag3: '标签',
            score: '5.0',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        }, {
            image: littleImage3,
            titll: '地平线 西之绝境',
            tag1: '标签',
            tag2: '标签',
            tag3: '标签',
            score: '5.0',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        }, {
            image: littleImage4,
            titll: '原神',
            tag1: '标签',
            tag2: '标签',
            tag3: '标签',
            score: '5.0',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        },
    ])

    return (
        <ul className={styles.smallImages}>
            {
                data.map((item, index) => {
                    return (
                        <li className={styles.smallImages_li}>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div>
                                <h2>{item.titll}</h2>
                                <div className={styles.tages}>
                                    <ul>
                                        <li>{item.tag1}</li>
                                        <li>{item.tag2}</li>
                                        <li>{item.tag3}</li>
                                    </ul>
                                    <div>{item.score}</div>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    )

                })
            }
        </ul>
    );
}

export default BigLittleImage;
