import styles from "./person.module.css"

const Information = () => {
    return (
        <div className={styles.information_part}>
            <h3 className={styles.title}>个人信息</h3>
            <div className={styles.information_box}></div>
        </div>
    )
}
export default Information