
import FifthCard from "../fifthcard/fifthcard";
import styles from "./fifth.module.css"

const HomeFifthPage = () => {
    return (
        <div className={styles.home_fifthpage}>
            <h3 className={styles.maintitle}>
                受到多家组织信赖
            </h3>
            <div className={styles.content}>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
                <FifthCard></FifthCard>
            </div>
        </div>
    )
}
export default HomeFifthPage;