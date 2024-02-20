import { Button, List } from 'antd'
import { ProjectTwoTone } from '@ant-design/icons'
import styles from './Projects.module.css'
import { ProjectType } from 'types/ProjectTypes'
import { useNavigate } from 'react-router-dom'

interface IProjects {
  projects: ProjectType[]
}

export function Projects(props: IProjects): JSX.Element {
  const navigate = useNavigate()

  const navigateToProject = (projectId: number) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <>
      <Button onClick={() => navigate('/create-project')}>
        Create Project
      </Button>
      <List
        className={styles.container}
        dataSource={props.projects}
        renderItem={(project) => (
          <List.Item key={project.id} className={styles.project}>
            <div className={styles.leftEnd}>
              <ProjectTwoTone />
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <h4 className={styles.status}>Status: {project.status}</h4>
            <a
              className={styles.link}
              onClick={() => navigateToProject(project.id)}
            >
              More...
            </a>
          </List.Item>
        )}
      />
    </>
  )
}
