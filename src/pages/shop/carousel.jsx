import React, { useState, useEffect } from 'react';
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




const Index = ({ lastData }) => {

    const [data, setData] = useState([
        {
            image: littleImage1,
            titll: '绝地潜兵',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        },
        {
            image: littleImage2,
            titll: '麻布仔大冒险',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        }, {
            image: littleImage3,
            titll: '地平线 西之绝境',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        }, {
            image: littleImage4,
            titll: '原神',
            description: '玩家必须齐心协力保护超级地球，在浩大的星际战争中打败人类的敌人'

        },
    ])
    useEffect(() => {
        if (lastData.length > 0) { // 确保 lastData 不为空
            console.log(lastData);

            const information = lastData.map((item) => {
                return {
                    image: item.softwareImage,
                    titll: item.softwareName,
                    description: item.description
                };
            }).slice(0, 4); // 只保留前四个元素

            console.log(information);
            setData(information);
        }
    }, [lastData]);

    return (
        <Carousel autoplay style={contentStyle}>
            {data.map((item, index) => {
                return (<div className={styles.carouselTitle}>
                    <div>  <h1 >{item.titll}</h1>
                        <h2 >{item.description}</h2></div>
                    <h3 style={contentStyle} className={styles.carouselImage}><img src={item.image} className={styles.carouselImage} /></h3>
                </div>)
            })}
        </Carousel>
    );
}

export default Index;
