import { ProjectType } from "types/ProjectTypes";
import styles from "./Project.module.css";

export function Project(props: ProjectType): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <div className={styles.description}>
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>
      {/* <div className={styles.teamLead}>
                <h3>Team Lead</h3>
                <p>{props.teamLead.firstName}</p>
                <p>{props.teamLead.lastName}</p>
            </div> */}
      <div className={styles.startDate}>
        <h3>Start Date</h3>
        <p>{props.startDate}</p>
      </div>
    </div>
  );
}
