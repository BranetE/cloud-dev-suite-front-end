import { List, Card } from "antd"
import styles from "./Shifts.module.css"
import { CloudTwoTone, HomeTwoTone } from "@ant-design/icons";

interface Shift {
    shiftType: string;
    startTime: string;
    endTime: string;
}

const data: Array<Shift> = [
    {
        shiftType: "From Home",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "Remote",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "From Home",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "From Home",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "Remote",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "From Home",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },
    {
        shiftType: "From Home",
        startTime: "10/11/2023",
        endTime: "11/11/2023"
    },

]

export function Shifts(): JSX.Element {
    return(
        <List
            className={styles.container}
            grid={{ gutter: 16, column: 6 }}
            dataSource={data}
            renderItem={(item) => (
        <List.Item>
            <Card className={styles.shift}>
                <p className={styles.startTime}>Start Time: <b>{item.startTime}</b></p>
                <p>End Time: <b>{item.endTime}</b></p>
                <p>{item.shiftType === "Remote"? <CloudTwoTone />: <HomeTwoTone />} <b>{item.shiftType}</b></p>
                <a>More...</a>
            </Card>
        </List.Item>
        )}
        />
    )
}

// function ShiftIcon({ shiftType }: {shiftType: string}) {
//     return shiftType === "Remote" ? <CloudTwoTone /> : <HomeTwoTone />;
// }