import styles from "./third.module.css"
import ThirdCard from "../thirdcard/thirdcard";
import { useEffect, useState } from 'react'
import { homePageShowSoftware } from "../../../api"
import axios from "axios";


const HomeThirdPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function receiveInformation() {
            try {
                const response = await homePageShowSoftware(1, '', [], 6)
                console.log(response);
            } catch (error) {
                console.error('Error sending verification code:', error);
            }

        }
        receiveInformation()
    }, [])



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