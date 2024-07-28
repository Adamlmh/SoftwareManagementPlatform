import styles from "./card.module.css"

import { Card } from 'antd';
const FifthCard = ({image}) => {
    return (
        <Card
            className={styles.card}
            hoverable  style={{ width: '23%' }}>
           
                <div className={styles.picbox}>
                <img className={styles.pic} src={image}></img>
                </div>
                
        </Card>
    )
}
export default FifthCard;