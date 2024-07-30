import styles from "./third.module.css";
import ThirdCard from "../thirdcard/thirdcard";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { softwareRanking } from "../../../api";
import axios from "axios";

const HomeThirdPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function receiveInformation() {
            try {
                const response = await softwareRanking();
                setData(response.data || []); // Ensure data is always an array
            } catch (error) {
                console.error('Error fetching software ranking:', error);
            }
        }
        receiveInformation();
    }, []);

    // Handle navigation to details page
    const goToDetails = (software) => {
        if (software) {
            const softwareId = software.softwareId;
            console.log(softwareId);
            const encodedSoftwareId = encodeURIComponent(softwareId); // Encode software ID
            const url = `/header/verifybill?softwareId=${encodedSoftwareId}`; // Construct URL
            navigate(url);
            window.scrollTo(0, 0);
        }
    };

    // Determine the number of items to display
    const itemsToDisplay = data && data.length > 0 ? (data.length > 6 ? data.slice(0, 6) : data) : [];

    return (
        <div className={styles.home_thirdpage}>
            <h3 className={styles.title}>
                为什么选择我们
            </h3>
            <div className={styles.maincontent}>
                <h3>优质的软件</h3>
                <div className={styles.content}>
                    {itemsToDisplay.map((item, index) => (
                        <div key={index} onClick={() => goToDetails(item)}>
                            <ThirdCard data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeThirdPage;