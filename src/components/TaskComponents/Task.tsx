import { ProgressIcon } from "./ProgressIcon"
import styles from "./Task.module.css"

interface TaskProps {
    title: string,
    description: string,
    status: string,
    comment?: string,
    finishTime: string
}

export function Task(props: TaskProps): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.headerPart}>
                <h2>{props.title}</h2>
                {/* <p>Employee: <b></b></p> */}
                <p>Finish Time: <b>{props.finishTime}</b></p>
            </div>
            <div>
                <h4><ProgressIcon status={props.status}/> {props.status}</h4>
            </div>
            <div>
                <h4>Description</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}