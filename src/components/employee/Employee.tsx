import { Button } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Employee.module.css";
import { EmployeeType } from "types/EmployeeTypes";

interface IEmployee {
  employee: EmployeeType;
}

export function Employee(props: IEmployee): JSX.Element {
  return (
    <div className={styles.employee}>
      <Avatar size={64} icon={<UserOutlined />} />
      <div>
        <h5 className={styles.email}>Email:</h5>
        <p>{props.employee.email}</p>
        <h5>First Name:</h5>
        <p>{props.employee.firstName}</p>
        <h5>Last Name:</h5>
        <p>{props.employee.lastName}</p>
        <h5>Position:</h5>
        <p>{props.employee.position}</p>
        <h5>Experience:</h5>
        <p>{props.employee.experience}</p>
      </div>
      <Button
        className={styles.button}
        type="primary"
        danger
        onClick={() => {}}
      >
        Log Out
      </Button>
    </div>
  );
}
