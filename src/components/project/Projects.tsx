import { useState } from "react";
import { List } from "antd";
import { ProjectTwoTone } from "@ant-design/icons";
import styles from "./Projects.module.css"


interface Project {
    title: string;
    description: string;
    status: string;
}


const data: Array<Project> = [
    {
        title: "CLOUD DEV SUITE",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "DEVELOPMENT",
    },
    {
        title: "GREENCITY",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "MAINTENANCE",
    },
    {
        title: "NO WASTE",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "DEVELOPMENT",
    },
    {
        title: "FURY DRONES",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: "MAINTENANCE",
    },
]

export function Projects(): JSX.Element {
    // const [projects, setProjects] = useState<Project[]>([]);
   
    // setProjects(data)
    
    return(
        <List
            className={styles.container}
            dataSource={data}
            renderItem={(project) => (
                <List.Item key={project.title} className={styles.project}>
                    <div className={styles.leftEnd}>
                        <ProjectTwoTone/>
                        <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    <h4 className={styles.status}>Status: {project.status}</h4>
                    <a className={styles.link}>More...</a>
                </List.Item>
            )}    
        />
    )
}