import { SprintType } from "types/SprintTypes"
import styles from "./Sprint.module.css"

export function Sprint(props: SprintType): JSX.Element {
    return (
        <div className={styles.container}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.status}>
                <h3>Status</h3>
                <p>{props.status}</p>
            </div>
            <div className={styles.dates}>
                <h3>Start Date</h3>
                <p>{props.startDate}</p>
                <h3>End Date</h3>
                <p>{props.endDate}</p>
            </div>
        </div>
    )
}