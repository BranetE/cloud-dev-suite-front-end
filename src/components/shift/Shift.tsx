import { ShiftType } from 'types/ShiftTypes'
import { Button, Divider, Flex, Typography } from 'antd'
import { TitleStyle } from '../../styles/Styles'
import { shiftApi } from 'api/shiftAPI'

const { Title } = Typography

const finishShift = (employeeId: string) => {
  shiftApi.finishShift(employeeId)
}

interface IShift {
  shift: ShiftType
}

export function Shift(props: IShift): JSX.Element {
  return (
    <Flex vertical style={{ alignItems: 'center' }}>
      <Divider>Shift Type</Divider>
      <Title level={4} style={TitleStyle}>
        {props.shift.shiftType}
      </Title>
      <Divider>Start Time</Divider>
      <Title level={4} style={TitleStyle}>
        {new Date(props.shift.startTime).toLocaleDateString()}
      </Title>
      {props.shift.endTime ? (
        <>
          <Divider>End Time</Divider>
          <Title level={4} style={TitleStyle}>
            {new Date(props.shift.endTime).toLocaleDateString()}
          </Title>
        </>
      ) : (
        <></>
      )}
      <Divider>Finish Shift</Divider>
      <Button
        onClick={() => finishShift(props.shift.employeeId)}
        style={{ alignContent: 'center' }}
        danger
      >
        Finish Shift
      </Button>
    </Flex>
  )
}
