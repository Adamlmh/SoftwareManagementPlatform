import Detail from "./commonversion"
import SoftwareName from "./softwarename"
import Update from "./updata"
import Version from "./version"
import styles from "./verifybill.module.css"
import CommonVersion from "./commonversion"
import React, { useState } from 'react';
const VerifyBill=()=>{
    const [isadvanced,setAdvanced]=useState(false)
    return(
        <div className={styles.verifybill}>
            <SoftwareName></SoftwareName>
            <CommonVersion version="基础版" status='0'></CommonVersion>
            {isadvanced && <CommonVersion version="高级版" status='1'></CommonVersion>}
            <Update></Update>
        </div>
    )
}
export default VerifyBill