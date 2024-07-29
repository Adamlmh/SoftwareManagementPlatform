import styles from "./verifybill.module.css"
import React, { useState } from 'react';
import {Card ,Button,Modal} from "antd"
const SoftwareName = () => {
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <div className={styles.softwarename}>
            <h3 className={styles.title}>软件名</h3>
            <div className={styles.content}>
<div className={styles.pic}></div>
<div className={styles.right}>
    <div className={styles.righttop_card}>
<Card hoverable style={{width:'100%'} }className={styles.introduce}>
                            <p style={{ fontSize: '16px', fontFamily: 'Microsoft YaHei',letterSpacing:1 }}>
     玩家可以独自探索、或与朋友并肩冒险，探索随机生成的世界，创造令人惊叹的奇迹。更有丰富的组件资源，帮助玩家开启多种创意玩法。你想玩的，这里都有。快拉上小伙伴一同加入冒险家大家庭，随时随地享受创造乐趣！欢乐的暑假，怎能少得了一场旅行？1.19&1.20.1双版本惊喜来袭，全新群系等你探索！幽匿群系的神秘诡谲、樱花群系的梦幻绮丽，还有荒野中的奇异生物和古迹废墟里鲜为人知的宝藏......世界大有不同！赶紧和小伙伴一起揭开未知的冒险篇章！
    </p>
</Card>
    </div>
    <div className={styles.buy_btn}>
                        <Button className={styles.btn} onClick={() => setModal2Open(true)}>1,400CNY起 购买</Button>
                        <Modal
                            title="请选择下载方式"
                            centered
                            open={modal2Open}
                            onOk={() => setModal2Open(false)}
                            onCancel={() => setModal2Open(false)}
                        >
                            <div className={styles.download_choose}>
                                <div className={styles.common}>
                                    <h3 className={styles.version_title}>普通版本</h3>
                                    <div className={styles.version_detail}>普通版本详细信息</div>
                                    <Button className={styles.mychoose_btn} type="primary">普通版本下载</Button>
                                    <Button className={styles.mychoose_btn} type="primary">查看历史普通版本</Button>
                                </div>
                               <div className={styles.advanced}>
                                    <h3 className={styles.version_title}>高级版本</h3>
                                    <div className={styles.version_detail}>高级版本详细信息</div>
                                    <Button className={styles.mychoose_btn} type="primary">高级版本下载</Button>
                                    <Button className={styles.mychoose_btn} type="primary">查看历史高级版本</Button>
                               </div>
                               
                            </div>
                        </Modal>
    </div>
</div>
            </div>
        </div>
    )
}
export default SoftwareName