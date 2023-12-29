import { List, Progress } from "antd"
import styles from "./Sprints.module.css"
import { SprintType } from "types/SprintTypes";
import { sprintApi } from "api/sprintApi";
import { useState, useEffect } from "react";

// interface Sprint {
//     title: string,
//     startDate: string,
//     finishDate?: string,
//     status: string
// }

// const data: Array<Sprint> = [
//     {
//         title: "Sprint 1",
//         startDate: "10/10/2023",
//         finishDate: "20/12/2023",
//         status: "Closed"
//     },
//     {
//         title: "Sprint 1",
//         startDate: "10/10/2023",
//         // finishDate: "20/12/2023",
//         status: "Open"
//     },
// ]

const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

export function Sprints({projectId}: {projectId: number}): JSX.Element {

    const [sprints, setSprints] = useState<SprintType[]>()

    useEffect(() => {
      sprintApi.getAllSprintsForProject(projectId)
      .then(res => setSprints(res.data))
    }, [projectId])

    return (
        <List
            className={styles.container}
            dataSource={sprints}
            renderItem={(sprint) => (
                <List.Item key={sprint.title} className={styles.sprint}>
        
                    <h3>{sprint.title}</h3>
                
                    <p className={styles.date}><b>{sprint.startDate} {sprint.finishDate != null? "- " + sprint.finishDate: ""}</b></p>
                    <Progress 
                        className={styles.progressBar}
                        showInfo={false} 
                        percent={sprint.status==='Closed'? 100: 50} 
                        strokeColor={twoColors} 
                    />
                    <a>More...</a>
                </List.Item>
            )}    
        />
    )
}