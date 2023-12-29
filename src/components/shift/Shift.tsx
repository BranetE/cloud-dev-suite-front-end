import styles from "./Shift.module.css"

interface ShiftProps {
    shiftType: string;
    startTime: string;
    endTime?: string;
}

export function Shift(props: ShiftProps): JSX.Element {
    return (
        <div className={styles.container}>
        <div>
            <h2>{props.shiftType}</h2>
        </div>
        <div className={styles.dates}>
            <h3>Start Time</h3>
            <p>{props.startTime}</p>
            <h3>End Time</h3>
            <p>{props.endTime}</p>
        </div>
    </div>
    )
}