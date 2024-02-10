import { List, Card } from "antd"
import { ReconciliationTwoTone } from "@ant-design/icons";
import styles from "./Tasks.module.css"
import { ProgressIcon } from "./ProgressIcon";
import { TaskType } from "types/TaskTypes";
import { useNavigate } from "react-router-dom";

export function Tasks(tasks: TaskType[]): JSX.Element {

    const navigate = useNavigate();

    const navigateToTaskPage = (taskId?: number) => {
        navigate(`/task/${taskId}`)
    }

    return(
        <List
            className={styles.container}
            grid={{ gutter: 16, column: 6 }}
            dataSource={tasks}
            renderItem={(item: TaskType) => (
        <List.Item>
            <Card className={styles.task}>
                <h3><ReconciliationTwoTone /> {item.title}</h3>
                <h4><ProgressIcon status={item.status} /> {item.status?.replace("_", " ")}</h4>
                <p className={styles.description}>{item.description}</p>
                <a onClick={() => navigateToTaskPage(item.id)}>More...</a>
            </Card>
        </List.Item>
        )}
        />
    )
}