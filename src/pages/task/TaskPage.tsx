import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { taskApi } from 'api/taskAPI'
import { Task } from 'components/task/Task'
import { LayoutStyle, SiderStyle } from 'pages/styles/Styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TaskType } from 'types/TaskTypes'

export function TaskPage(): JSX.Element {
  const { taskId } = useParams() as { taskId: string }
  const [task, setTask] = useState<TaskType>({
    id: 0,
    title: '',
    description: '',
    status: '',
  })

  useEffect(() => {
    taskApi.getTask(taskId).then((res) => setTask(res.data))
  }, [taskId])

  return (
    <Layout style={LayoutStyle}>
      <Sider width="25%" style={SiderStyle}>
        <Task task={task} />
      </Sider>
    </Layout>
  )
}
