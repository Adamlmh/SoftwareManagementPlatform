import styles from "./verifybill.module.css"
import React, { useState } from 'react';
import { Card,List,Button,Modal } from "antd"
const data1 = [
    '我的世界 V2.00',
];
const data2 = [
    '我的世界 V2.00',
    '我的世界 V2.00',
    '我的世界 V1.00',
    '我的世界 V1.00',
    '我的世界 V3.00',
    '我的世界 V2.00',
];
const CommonVersion = ({ version,status}) => {
    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const toggleModal = (idx, target) => {
        setIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };
    const toggleDownloadModal = (target) => {
        setIsDownloadModalOpen(target);
        toggleModal(1, false)
    };
    return (
        <div className={styles.common_version}>
            <h3 className={styles.title}>{version}</h3>
            <div className={styles.detail_content}>
                <Card style={{width:'100%'}}
                hoverable
                className={styles.detailcard}>
                    <div className={styles.detailsbox}>
                        <p style={{
                            fontSize: '14px', lineHeight: 2,
                            letterSpacing: '1px',
                            fontFamily: 'Microsoft YaHei'
                        }}>
                            【暑期双版本惊喜更新，共同探索全新世界】<br></br>
                            凭借自由无限的开放世界、超乎想象的游戏玩法，《我的世界》深受上亿玩家的喜爱。玩家可以独自探索、或与朋友并肩冒险，探索随机生成的世界，创造令人惊叹的奇迹。更有丰富的组件资源，帮助玩家开启多种创意玩法。你想玩的，这里都有。快拉上小伙伴一同加入冒险家大家庭，随时随地享受创造乐趣！欢乐的暑假，怎能少得了一场旅行？1.19&1.20.1双版本惊喜来袭，全新群系等你探索！幽匿群系的神秘诡谲、樱花群系的梦幻绮丽，还有荒野中的奇异生物和古迹废墟里鲜为人知的宝藏......世界大有不同！赶紧和小伙伴一起揭开未知的冒险篇章！
                            <br></br>
                            【趣味乐园随心畅玩，大型多人社交玩法上线】方块乐园玩法欢乐上线！从温馨的小镇，到宏伟的城堡；从热闹的广场，到高耸的悬崖，这个全新的特色主城将随着主题季故事的发展而不断变化！城镇跑酷、趣味合成、好友社交，丰富玩法乐趣无穷，更有各种隐藏彩蛋等待你发掘！做好准备，探索乐园的无限可能性！
                            <br></br>
                            【化身樱花村守护者，首个主题季冒险手册开启】来自幽匿的威胁迫在眉睫，樱花村向冒险家发出召唤，是时候踏上新的旅途了！首个主题季-冒险之歌正式开启，樱花主题外观同步上线！冒险家们赶紧与小伙伴一起拿起樱之刃和樱之弓，化身樱花武士，阻止来自深暗之域的入侵，将和平与安宁带回方块世界吧！
                            <br></br>
                            【来自深暗之域的召唤，暗域守望正式登场】远古封印终于解除，暗域守望现身于世！他掌握着监守者的幽匿之力，手执裂魂之泣，一爪即可撕裂魂魄，威力无可匹敌！青色波纹在他胸口闪烁，发出回响在黑暗深处的尖啸。而他身后的灵魂裂隙中，无数被锁链禁锢的旅者之魂低喃，渴求被释放！赶紧与暗域守望建立强大链接，与幽匿主宰、幽冥小飞龙一同驰骋深暗之域，开启前所未有的循声历险吧！
                            <br></br>
                            【全新联动欢乐来袭，与哆啦A梦奏响夏日乐章】听，好像从哪里传来了美妙的乐声？原来是哆啦A梦和他的伙伴们在方块世界开起了夏日音乐会！《我的世界》x《哆啦A梦》联动上线！可爱的哆啦A梦化身小小指挥家，与竖笛手大雄、鼓手静香一起布置舞台！小夫优雅地拉起了小提琴，就连胖虎也吹响了浑厚的大号！交响乐小分队集结完毕！这个暑期，与新的伙伴们一起用音乐的能量唤醒方块世界夏日的活力吧！
                        </p>
                    </div>
                    <div className={styles.history_version}>
                        <List
                            size="large"
                            dataSource={data1}
                            renderItem={(item) => <List.Item><div className={styles.information}>
                                <span className={styles.name}>{item}</span><span className={styles.version_time}>2024-06-02</span>
                                <Button className={styles.download_btn} onClick={() => toggleDownloadModal(true)}>下载</Button></div></List.Item>}
                        />
                    </div>
                    <div className={styles.checkout_btnbox}><Button className={styles.checkout_btn} onClick={() => toggleModal(1, true)}>查看历史版本</Button></div>
                    {/* 软件历史版本弹出窗 */}
                    <Modal
                        title="软件历史版本"
                        open={isModalOpen[1]}
                        onOk={() => toggleModal(1, false)}
                        onCancel={() => toggleModal(1, false)}
                        footer=""
                    >
                      
                            <List
                                size="large"
                                className={styles.versionlist}
                                dataSource={data2}
                                renderItem={(item) => <List.Item><div className={styles.history_version_check}>
                                    <span className={styles.versionname}>{item}</span><span className={styles.versiontime}>2024-06-02</span>
                                    <Button className={styles.versiondownload_btn} onClick={() => toggleDownloadModal(true)}>下载</Button>
                                    </div></List.Item>}
                            />
                       
                       
                    </Modal>
                    {/* 下载系统选择弹出窗 */}
                    <Modal
                        title="请选择下载方式"
                        open={isDownloadModalOpen}
                        onOk={() => toggleDownloadModal(false)}
                        onCancel={() => toggleDownloadModal(false)}
                        footer=""
                    >
                        <div className={styles.choose_system}>
<Button type="primary" className={styles.system_btn}>Windows下载</Button>
                            <Button type="primary" className={styles.system_btn}>mac下载</Button>
                            <Button type="primary" className={styles.system_btn}>Linux下载</Button>
                        </div>


                    </Modal>
                    
                </Card>
            </div>
        </div>
    )
}
export default CommonVersion;