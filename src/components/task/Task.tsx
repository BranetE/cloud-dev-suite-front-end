import { TaskType } from "types/TaskTypes"
import { ProgressIcon } from "./ProgressIcon"
import styles from "./Task.module.css"
import { useEffect, useState } from "react"
import { taskApi } from "api/taskAPI"

export function Task({taskId}: {taskId:number}): JSX.Element {

    const [task, setTask] = useState<TaskType>()

    useEffect(() => {
      taskApi.getTask(taskId)
      .then(res => setTask(res.data))
    }, [taskId])
    

    return (
        <div className={styles.container}>
            <div className={styles.headerPart}>
                <h2>{task.title}</h2>
                {/* <p>Employee: <b></b></p> */}
                <p>Finish Time: <b>{task.finishTime}</b></p>
            </div>
            <div>
                <h4><ProgressIcon status={task.status}/> {task.status}</h4>
            </div>
            <div>
                <h4>Description</h4>
                <p>{task.description}</p>
            </div>
        </div>
    )
}