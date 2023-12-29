import { List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Employees.module.css"
import { EmployeeType } from "types/EmployeeTypes";

// interface Employee {
//     email: string,
//     firstName: string,
//     lastName: string,
//     position: string,
//     experience: string
// } 
 
// const data: Array<Employee> = [
//     {
//         email: "email@mail.com",
//         firstName: "Employee",
//         lastName: "Employee",
//         position: "Developer",
//         experience: "Middle"
//     }
// ]
 export function Employees(data: EmployeeType[]): JSX.Element {

    

    return (
        <List
            className={styles.container}
            dataSource={data}
            renderItem={(employee) => (
                <List.Item key={employee.email} className={styles.employee}>
                    <List.Item.Meta
                        className={styles.leftEnd}
                        avatar={<Avatar size={64} icon={<UserOutlined />}/>}
                        title={employee.firstName + " " + employee.lastName}
                        description={employee.email}
                    />
                    <h4 className={styles.column}>Position: {employee.position}</h4>
                    <h4 className={styles.column}>Experience: {employee.experience}</h4>
                    <a className={styles.rightEnd}>More...</a>
                </List.Item>
            )}    
        />
    )
 }