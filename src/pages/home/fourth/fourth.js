import FourthCard from "../fourthCard/fourthcard";
import styles from "./fourth.module.css"

const HomeFourthPage = () => {
    return (
        <div className={styles.home_fourthpage}>
            <h3 className={styles.maintitle}>
                优秀的用户信赖
            </h3>
            <div className={styles.content}>
                <FourthCard></FourthCard>
                <FourthCard></FourthCard>
                <FourthCard></FourthCard>
                <FourthCard></FourthCard>
            </div>
        </div>
    )
}
export default HomeFourthPage;