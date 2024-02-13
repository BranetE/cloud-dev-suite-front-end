import { List, Card } from "antd";
import styles from "./Shifts.module.css";
import { CloudTwoTone, HomeTwoTone } from "@ant-design/icons";
import { ShiftType } from "types/ShiftTypes";

interface IShifts {
  shifts: ShiftType[];
}

export function Shifts(props: IShifts): JSX.Element {
  return (
    <List
      className={styles.container}
      grid={{ gutter: 16, column: 6 }}
      dataSource={props.shifts}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.shift}>
            <p className={styles.startTime}>
              Start Time: <b>{item.startTime}</b>
            </p>
            <p>
              End Time: <b>{item.endTime}</b>
            </p>
            <p>
              {item.shiftType === "Remote" ? <CloudTwoTone /> : <HomeTwoTone />}{" "}
              <b>{item.shiftType}</b>
            </p>
            <a>More...</a>
          </Card>
        </List.Item>
      )}
    />
  );
}
