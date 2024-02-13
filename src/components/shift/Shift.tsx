import { ShiftType } from "types/ShiftTypes";
import styles from "./Shift.module.css";

interface IShift {
  shift: ShiftType;
}

export function Shift(props: IShift): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h2>{props.shift.shiftType}</h2>
      </div>
      <div className={styles.dates}>
        <h3>Start Time</h3>
        <p>{props.shift.startTime}</p>
        <h3>End Time</h3>
        <p>{props.shift.endTime}</p>
      </div>
    </div>
  );
}
