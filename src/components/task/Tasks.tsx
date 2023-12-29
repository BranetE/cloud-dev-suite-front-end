import { List, Card } from "antd"
import { ReconciliationTwoTone } from "@ant-design/icons";
import styles from "./Tasks.module.css"
import { ProgressIcon } from "./ProgressIcon";
import { TaskType } from "types/TaskTypes";
import { useEffect, useState } from "react";
import { taskApi } from "api/taskAPI";

// interface Task {
//     title: string;
//     description: string;
//     status: string;
// }

// const data: Array<Task> = [
//     {
//         title: "Task",
//         description: "Lorem Ipsum isem Ipsum.",
//         status: "Open"
//     },
//     {
//         title: "Task",
//         description: "Lorem Ipsum is simting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "In_Progress"
//     },
//     {
//         title: "Task",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "In_Progress"
//     },
//     {
//         title: "Task",
//         description: "Lorand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "Done"
//     },
//     {
//         title: "Task",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "In_Progress"
//     },
//     {
//         title: "Task",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "Open"
//     },
//     {
//         title: "Task",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         status: "In_Progress"
//     },
// ]

export function Tasks({sprintId}: {sprintId:number}): JSX.Element {

    const [tasks, setTasks] = useState<TaskType[]>([]);
   
    useEffect(() => {
        taskApi.getAllTasksByEmployee(sprintId)
        .then(res => setTasks(res.data))    
    }, [sprintId])

    return(
        <List
            className={styles.container}
            grid={{ gutter: 16, column: 6 }}
            dataSource={tasks}
            renderItem={(item) => (
        <List.Item>
            <Card className={styles.task}>
                <h3><ReconciliationTwoTone /> {item.title}</h3>
                <h4><ProgressIcon status={item.status} /> {item.status.replace("_", " ")}</h4>
                <p className={styles.description}>{item.description}</p>
                <a>More...</a>
            </Card>
        </List.Item>
        )}
        />
    )
}