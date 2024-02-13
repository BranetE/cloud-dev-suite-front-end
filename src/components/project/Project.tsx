import { ProjectType } from "types/ProjectTypes";
import styles from "./Project.module.css";

interface IProject {
  project: ProjectType;
}

export function Project(props: IProject): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>{props.project.title}</h2>
      <div className={styles.description}>
        <h3>Description</h3>
        <p>{props.project.description}</p>
      </div>
      {/* <div className={styles.teamLead}>
                <h3>Team Lead</h3>
                <p>{props.project.teamLead.firstName}</p>
                <p>{props.project.teamLead.lastName}</p>
            </div> */}
      <div className={styles.startDate}>
        <h3>Start Date</h3>
        <p>{props.project.startDate}</p>
      </div>
    </div>
  );
}
