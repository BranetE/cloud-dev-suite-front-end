import { Button, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { sprintApi } from 'api/sprintApi'
import { taskApi } from 'api/taskAPI'
import { Sprint } from 'components/sprint/Sprint'
import { Tasks } from 'components/task/Tasks'
import { LayoutStyle, SiderStyle } from 'styles/Styles'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SprintType } from 'types/SprintTypes'
import { TaskType } from 'types/TaskTypes'
import { useDecodeJwtToken } from 'util/decodeToken'

export function SprintPage(): JSX.Element {
  const { sprintId } = useParams() as { sprintId: string }
  const [sprint, setSprint] = useState<SprintType>({
    id: 0,
    title: '',
    status: '',
    startDate: '',
  })
  const [tasks, setTasks] = useState<TaskType[]>([])
  const navigate = useNavigate()
  const { position } = useDecodeJwtToken()

  useEffect(() => {
    sprintApi.getSprint(sprintId).then((res) => setSprint(res.data))
    taskApi.getAllTasksBySprint(sprintId).then((res) => setTasks(res.data))
  }, [sprintId])

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Sprint sprint={sprint} />
      </Sider>
      <Layout>
        <Content>
          {position == 'TEAM_LEAD' ? (
            <Button
              type={'primary'}
              style={{ margin: '15px' }}
              onClick={() => navigate(`/create-task?sprintId=${sprintId}`)}
            >
              Create Task
            </Button>
          ) : (
            <></>
          )}
          <Tasks tasks={tasks} />
        </Content>
      </Layout>
    </Layout>
  )
}
