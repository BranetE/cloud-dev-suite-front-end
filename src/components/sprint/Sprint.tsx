import { SprintType } from "types/SprintTypes";
import styles from "./Sprint.module.css";

interface ISprint {
  sprint: SprintType;
}

export function Sprint(props: ISprint): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h2>{props.sprint.title}</h2>
      </div>
      <div className={styles.status}>
        <h3>Status</h3>
        <p>{props.sprint.status}</p>
      </div>
      <div className={styles.dates}>
        <h3>Start Date</h3>
        <p>{props.sprint.startDate}</p>
        <h3>End Date</h3>
        <p>{props.sprint.endDate}</p>
      </div>
    </div>
  );
}
