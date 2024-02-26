import { Button, List } from 'antd'
import { ProjectTwoTone } from '@ant-design/icons'
import styles from './Projects.module.css'
import { ProjectType } from 'types/ProjectTypes'
import { useNavigate } from 'react-router-dom'
import { TitleStyle } from 'styles/Styles'
import { useDecodeJwtToken } from 'util/decodeToken'

interface IProjects {
  projects: ProjectType[]
}

export function Projects(props: IProjects): JSX.Element {
  const navigate = useNavigate()
  const { position } = useDecodeJwtToken()

  const navigateToProject = (projectId: number) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <>
      {position == 'MANAGER' ? (
        <Button
          type="primary"
          style={{ margin: '1em 0 0 1em' }}
          onClick={() => navigate('/create-project')}
        >
          Create Project
        </Button>
      ) : (
        <></>
      )}

      <List
        className={styles.container}
        dataSource={props.projects}
        renderItem={(project) => (
          <List.Item key={project.id} className={styles.project}>
            <div className={styles.leftEnd}>
              <ProjectTwoTone />
              <h3 style={TitleStyle}>{project.title}</h3>
            </div>
            <p style={{ width: '70%', overflow: 'hidden' }}>
              {project.description}
            </p>
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
