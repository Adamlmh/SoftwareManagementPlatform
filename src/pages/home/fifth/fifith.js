
import FifthCard from "../fifthcard/fifthcard";
import styles from "./fifth.module.css"
import image1 from '../../../assets/images/Starbucks.png';
import image2 from '../../../assets/images/Pepsi.png';
import image3 from '../../../assets/images/Walmart.png';
import image4 from '../../../assets/images/Azendoo.png';
import image5 from '../../../assets/images/CNN.png';
import image6 from '../../../assets/images/Philips.png';
import image7 from '../../../assets/images/Pizza Hut.png';
import image8 from '../../../assets/images/Beanstalk.png';
const HomeFifthPage = () => {
    return (
        <div className={styles.home_fifthpage}>
            <h3 className={styles.maintitle}>
                受到多家组织信赖
            </h3>
            <div className={styles.content}>
                <FifthCard image={image1}></FifthCard>
                <FifthCard image={image2}></FifthCard>
                <FifthCard image={image3}></FifthCard>
                <FifthCard image={image4}></FifthCard>
                <FifthCard image={image5}></FifthCard>
                <FifthCard image={image6}></FifthCard>
                <FifthCard image={image7}></FifthCard>
                <FifthCard image={image8}></FifthCard>
            </div>
        </div>
    )
}
export default HomeFifthPage;