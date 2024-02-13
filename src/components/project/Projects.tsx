import { List } from "antd";
import { ProjectTwoTone } from "@ant-design/icons";
import styles from "./Projects.module.css";
import { ProjectType } from "types/ProjectTypes";

export function Projects(projects: ProjectType[]): JSX.Element {
  return (
    <List
      className={styles.container}
      dataSource={projects}
      renderItem={(project) => (
        <List.Item key={project.title} className={styles.project}>
          <div className={styles.leftEnd}>
            <ProjectTwoTone />
            <h3>{project.title}</h3>
          </div>
          <p>{project.description}</p>
          <h4 className={styles.status}>Status: {project.status}</h4>
          <a className={styles.link}>More...</a>
        </List.Item>
      )}
    />
  );
}
