import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { sprintApi } from 'api/sprintApi'
import { taskApi } from 'api/taskAPI'
import { Sprint } from 'components/sprint/Sprint'
import { Tasks } from 'components/task/Tasks'
import { LayoutStyle, SiderStyle } from 'pages/styles/Styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SprintType } from 'types/SprintTypes'
import { TaskType } from 'types/TaskTypes'

export function SprintsPage(): JSX.Element {
  const { sprintId } = useParams() as { sprintId: string }
  const [sprint, setSprint] = useState<SprintType>({
    id: 0,
    title: '',
    status: '',
    startDate: '',
  })
  const [tasks, setTasks] = useState<TaskType[]>([])

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
          <Tasks tasks={tasks} />
        </Content>
      </Layout>
    </Layout>
  )
}
