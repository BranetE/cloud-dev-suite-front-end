import { SprintType } from 'types/SprintTypes'
import { Button, Divider, Flex, Typography } from 'antd'
import { TitleStyle } from '../../styles/Styles'
import { useDecodeJwtToken } from 'util/decodeToken'

const { Title } = Typography

interface ISprint {
  sprint: SprintType
}

export function Sprint(props: ISprint): JSX.Element {
  const { position } = useDecodeJwtToken()

  return (
    <Flex vertical style={{ alignItems: 'center' }}>
      <Divider>Title</Divider>
      <Title level={4} style={TitleStyle}>
        {props.sprint.title}
      </Title>
      <Divider>Status</Divider>
      <Title level={4} style={TitleStyle}>
        {props.sprint.status}
      </Title>
      <Divider>Start Date</Divider>
      <Title level={4} style={TitleStyle}>
        {props.sprint.startDate}
      </Title>
      {props.sprint.endDate ? (
        <>
          <Divider>End Date</Divider>
          <Title level={4} style={TitleStyle}>
            {props.sprint.endDate}
          </Title>
        </>
      ) : (
        <></>
      )}
      {position == 'TEAM_LEAD' ? (
        <Button type="primary" danger>
          End Sprint
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  )
}
