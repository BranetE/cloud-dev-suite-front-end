import { List, Progress } from "antd";
import styles from "./Sprints.module.css";
import { SprintType } from "types/SprintTypes";
import { useNavigate } from "react-router-dom";

const twoColors = { "0%": "#108ee9", "100%": "#87d068" };

interface ISprints {
  sprints: SprintType[];
}

export function Sprints(props: ISprints): JSX.Element {
  const navigate = useNavigate();

  const navigateToSprintPage = (sprintId: number) => {
    navigate(`/sprint/${sprintId}`);
  };

  return (
    <List
      className={styles.container}
      dataSource={props.sprints}
      renderItem={(sprint) => (
        <List.Item key={sprint.title} className={styles.sprint}>
          <h3>{sprint.title}</h3>

          <p className={styles.date}>
            <b>
              {sprint.startDate} {sprint.endDate ? "- " + sprint.endDate : ""}
            </b>
          </p>
          <Progress
            className={styles.progressBar}
            showInfo={false}
            percent={sprint.status === "Closed" ? 100 : 50}
            strokeColor={twoColors}
          />
          <a onClick={() => navigateToSprintPage(sprint.id)}>More...</a>
        </List.Item>
      )}
    ></List>
  );
}
