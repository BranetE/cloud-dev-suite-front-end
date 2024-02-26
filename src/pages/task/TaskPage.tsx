import { Layout } from 'antd'
import { taskApi } from 'api/taskAPI'
import { Task } from 'components/task/Task'
import { LayoutStyle } from 'styles/Styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TaskType } from 'types/TaskTypes'

export function TaskPage(): JSX.Element {
  const { taskId } = useParams() as { taskId: string }
  const [task, setTask] = useState<TaskType>({
    id: 0,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: '',
  })

  useEffect(() => {
    taskApi.getTask(taskId).then((res) => setTask(res.data))
  }, [taskId])

  return (
    <Layout style={LayoutStyle}>
      <Task task={task} />
    </Layout>
  )
}
