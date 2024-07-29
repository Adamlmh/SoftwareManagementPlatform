import FourthCard from "../fourthCard/fourthcard";
import styles from "./fourth.module.css"
import { Avatar, List } from 'antd';

const HomeFourthPage = () => {

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];


    return (
        <div>
            <h1 className={styles.title}>优秀的使用反馈</h1>
            <List
                lassName={styles.List}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item className={styles.MetaList}>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            className={styles.MetaList}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default HomeFourthPage;