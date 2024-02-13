import { TaskType } from "types/TaskTypes";
import { ProgressIcon } from "./ProgressIcon";
import { Divider, Flex, Select, Typography } from "antd";

const { Title } = Typography;

const statuses = [
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

interface ITask {
  task: TaskType;
}

export function Task(props: ITask): JSX.Element {
  return (
    <Flex>
      <Title level={3}>{props.task.title}</Title>
      <Title level={4}>
        <ProgressIcon status={props.task.status} /> {props.task.status}
      </Title>
      {props.task.finishTime ? (
        <div>
          <Divider>Finish Date</Divider>
          <Title level={4}>{props.task.finishTime}</Title>
        </div>
      ) : (
        <></>
      )}
      <Divider>Status</Divider>
      <Select options={statuses} defaultValue={props.task.status} />
    </Flex>
  );
}
