import styles from "./third.module.css"
import ThirdCard from "../thirdcard/thirdcard";
import { useEffect, useState } from 'react'
import { softwareRanking } from "../../../api"
import axios from "axios";


const HomeThirdPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function receiveInformation() {
            try {
                const response = await softwareRanking()
                setData(response.data)
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
                    <ThirdCard data={data[0]}></ThirdCard>
                    <ThirdCard data={data[1]}></ThirdCard>
                    <ThirdCard data={data[2]}></ThirdCard>
                    <ThirdCard data={data[3]}></ThirdCard>
                    <ThirdCard data={data[4]}></ThirdCard>
                    <ThirdCard data={data[5]}></ThirdCard>
                </div>
            </div>
        </div>
    )
}
export default HomeThirdPage;