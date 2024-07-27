import styles from "./third.module.css"
import ThirdCard from "./thirdcard/thirdcard";

const HomeThirdPage=()=>{
    return (
        <div className={styles.home_thirdpage}>
            <h3 className={styles.title}>
                为什么选择我们
            </h3>
            <div className={styles.maincontent}>
                <h3>优质的软件</h3>
                <div className={styles.content}>
                    <ThirdCard></ThirdCard>
                    <ThirdCard></ThirdCard>
                    <ThirdCard></ThirdCard>
                    <ThirdCard></ThirdCard>
                    <ThirdCard></ThirdCard>
                    <ThirdCard></ThirdCard>
                </div>
            </div>
        </div>
    )
}
export default HomeThirdPage;