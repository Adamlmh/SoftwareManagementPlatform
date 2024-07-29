import Detail from "./detail"
import SoftwareName from "./softwarename"
import Update from "./updata"
import Version from "./version"
import styles from "./verifybill.module.css"

const VerifyBill=()=>{
    return(
        <div className={styles.verifybill}>
            <SoftwareName></SoftwareName>
            <Detail></Detail>
            <Update></Update>
            <Version></Version>
        </div>
    )
}
export default VerifyBill