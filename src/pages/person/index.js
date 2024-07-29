import Information from "./information"
import styles from "./person.module.css"

const Person=()=>{
    return(
        <div className={styles.person_page}>
            <Information></Information>
        </div>
    )
}
export default Person