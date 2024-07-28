import styles from "./card.module.css"
import { Card,Button } from 'antd';
 const ThirdCard=()=>{
    return(
        <Card 
            cover={<div className={styles.pic}></div>}
        className={styles.card} 
        hoverable bordered={false} style={{ width: '370px',padding:'0' }}>
            <div className={styles.card_bottom}>
                <h3>软件</h3>
                <h5>软化描述</h5>
                <div className={styles.discription}>
                    <p>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>
                    
                </div>
                <Button className={styles.more}>更多</Button>
            </div>
        </Card>
    )
 }
 export default ThirdCard;