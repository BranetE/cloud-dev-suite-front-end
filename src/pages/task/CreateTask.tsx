import { Form, Input, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import styles from './CreateTask.module.css'
import { taskApi } from 'api/taskAPI'
import { CreateTaskRequest } from 'types/TaskTypes'
import { useSearchParams } from 'react-router-dom'

export function CreateTask(): JSX.Element {
  const [searchParams] = useSearchParams()
  const onFinish = (value: CreateTaskRequest) => {
    value.sprintId = Number(searchParams.get('sprintId'))
    taskApi.createTask(value)
  }
  const onFinishFailed = () => {}

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        className={styles.createTask}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className={styles.separated}>Create Task</h2>

        <Form.Item<CreateTaskRequest>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<CreateTaskRequest>
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <TextArea rows={4} placeholder="maxLength is 500" maxLength={500} />
        </Form.Item>

        <Form.Item style={{ margin: 0 }} wrapperCol={{ offset: 5, span: 16 }}>
          <Button className={styles.separated} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
