import { ProjectType } from 'types/ProjectTypes'
import { Divider, Flex, Typography } from 'antd'
import { TitleStyle } from '../../styles/Styles'

interface IProject {
  project: ProjectType
}

const { Title } = Typography

export function Project(props: IProject): JSX.Element {
  return (
    <Flex vertical style={{ alignItems: 'center' }}>
      <div>
        <Divider>Title</Divider>
        <Title level={4} style={TitleStyle}>
          {props.project.title}
        </Title>
      </div>
      {props.project.startDate ? (
        <div>
          <Divider>Start Date</Divider>
          <Title level={4} style={TitleStyle}>
            {new Date(props.project.startDate).toLocaleDateString()}
          </Title>
        </div>
      ) : (
        <></>
      )}
      <div>
        <Divider>Status</Divider>
        <Title level={4} style={TitleStyle}>
          {props.project.status}
        </Title>
      </div>
      <div>
        <Divider>Description</Divider>
        <Title level={5} style={TitleStyle}>
          {props.project.description}
        </Title>
      </div>
    </Flex>
  )
}
