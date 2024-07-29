import styles from "./third.module.css"
import ThirdCard from "../thirdcard/thirdcard";
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { softwareRanking } from "../../../api"
import axios from "axios";


const HomeThirdPage = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();

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

    //跳转到目标页面
    const goToDetails = (data) => {
        const softwareId = data.softwareId;
        console.log(softwareId);
        const encodedSoftwareId = encodeURIComponent(softwareId); // 编码软件ID
        const url = `/header/verifybill?softwareId=${encodedSoftwareId}`; // 构建URL
        navigate(url);
        window.scrollTo(0, 0);
    };



    return (
        <div className={styles.home_thirdpage}>
            <h3 className={styles.title}>
                为什么选择我们
            </h3>
            <div className={styles.maincontent}>
                <h3>优质的软件</h3>
                <div className={styles.content}>
                    <div onClick={() => goToDetails(data[0])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                    <div onClick={() => goToDetails(data[1])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                    <div onClick={() => goToDetails(data[2])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                    <div onClick={() => goToDetails(data[3])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                    <div onClick={() => goToDetails(data[4])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                    <div onClick={() => goToDetails(data[5])}>  <ThirdCard data={data[0]} ></ThirdCard></div>
                </div>
            </div>
        </div>
    )
}
export default HomeThirdPage;