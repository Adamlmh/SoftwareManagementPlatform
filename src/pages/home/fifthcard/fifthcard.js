import styles from "./card.module.css"
import { Card } from 'antd';
const FifthCard = () => {
    return (
        <Card
            className={styles.card}
            hoverable bordered={false} style={{ width: '30%'}}>
        </Card>
    )
}
export default FifthCard;