import { Button, Divider, Flex, Typography } from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import { UserOutlined } from '@ant-design/icons'
import { EmployeeType } from 'types/EmployeeTypes'
import { useAuth } from 'provider/AuthProvider'
import { TitleStyle } from 'styles/Styles'

const { Title } = Typography

interface IEmployee {
  employee: EmployeeType
}

export function Employee(props: IEmployee): JSX.Element {
  const { logout } = useAuth()
  return (
    <Flex vertical style={{ alignItems: 'center' }}>
      <Avatar size={64} icon={<UserOutlined />} />
      <Divider>Email</Divider>
      <Title level={4} style={TitleStyle}>
        {props.employee.email}
      </Title>
      <Divider>First Name</Divider>
      <Title level={4} style={TitleStyle}>
        {props.employee.firstName}
      </Title>
      <Divider>Last Name</Divider>
      <Title level={4} style={TitleStyle}>
        {props.employee.lastName}
      </Title>
      <Divider>Position</Divider>
      <Title level={4} style={TitleStyle}>
        {props.employee.position}
      </Title>
      <Divider>Experience</Divider>
      <Title level={4} style={TitleStyle}>
        {props.employee.experience}
      </Title>
      <Button
        type="primary"
        style={{ marginTop: '50px' }}
        danger
        onClick={logout}
      >
        Log Out
      </Button>
    </Flex>
  )
}
