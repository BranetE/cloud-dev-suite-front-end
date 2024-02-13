import { ShiftType } from "types/ShiftTypes";
import styles from "./Shift.module.css";

export function Shift(props: ShiftType): JSX.Element {
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
  );
}
