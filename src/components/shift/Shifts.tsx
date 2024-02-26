import { List, Card, Button } from 'antd'
import styles from './Shifts.module.css'
import { CloudTwoTone, HomeTwoTone } from '@ant-design/icons'
import { ShiftType } from 'types/ShiftTypes'
import { useNavigate } from 'react-router-dom'

interface IShifts {
  shifts: ShiftType[]
}

export function Shifts(props: IShifts): JSX.Element {
  const navigate = useNavigate()

  const navigateToShift = (shiftId: number) => {
    navigate(`/shift/${shiftId}`)
  }

  return (
    <>
      <Button
        type="primary"
        style={{ margin: '15px 0 0 15px' }}
        onClick={() => navigate('/open-shift')}
      >
        Open Shift
      </Button>
      <List
        className={styles.container}
        grid={{ gutter: 16, column: 6 }}
        dataSource={props.shifts}
        renderItem={(shift) => (
          <List.Item>
            <Card className={styles.shift}>
              <p className={styles.startTime}>
                Start Time:{' '}
                <b>{new Date(shift.startTime).toLocaleDateString()}</b>
              </p>
              {shift.endTime ? (
                <p>
                  End Time:{' '}
                  <b>{new Date(shift.endTime).toLocaleDateString()}</b>
                </p>
              ) : (
                <></>
              )}
              <p>
                {shift.shiftType === 'REMOTE' ? (
                  <CloudTwoTone />
                ) : (
                  <HomeTwoTone />
                )}{' '}
                <b>{shift.shiftType}</b>
              </p>
              <a onClick={() => navigateToShift(shift.id)}>More...</a>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}
