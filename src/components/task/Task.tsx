import { TaskType } from "types/TaskTypes";
import { ProgressIcon } from "./ProgressIcon";
import styles from "./Task.module.css";
import { useEffect, useState } from "react";
import { taskApi } from "api/taskAPI";
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

export function Task(props: TaskType): JSX.Element {
  return (
    // <div className={styles.container}>
    //   <div className={styles.headerPart}>
    //     <h2>{props.title}</h2>
    //     <p>
    //       Finish Time: <b>{props.finishTime}</b>
    //     </p>
    //   </div>
    //   <div>
    //     <h4>
    //       <ProgressIcon status={props.status} /> {props.status}
    //     </h4>
    //   </div>
    //   <div>
    //     <h4>Description</h4>
    //     <p>{props.description}</p>
    //   </div>
    // </div>
    <Flex vertical key={props.id}>
      <Title level={3}>{props.title}</Title>
      <Title level={4}>
        <ProgressIcon status={props.status} /> {props.status}
      </Title>
      {props.finishTime ? (
        <div>
          <Divider>Finish Date</Divider>
          <Title level={4}>{props.finishTime}</Title>
        </div>
      ) : (
        <></>
      )}
      <Divider>Status</Divider>
      <Select options={statuses} defaultValue={props.status} />
    </Flex>
  );
}
