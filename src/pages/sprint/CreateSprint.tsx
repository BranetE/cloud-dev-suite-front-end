import { Form, Input, Button, DatePicker } from 'antd'
import styles from './CreateSprint.module.css'
import { CreateSprintRequest } from 'types/SprintTypes'
import { sprintApi } from 'api/sprintApi'
import { useSearchParams } from 'react-router-dom'

const dateFormat = 'YYYY-MM-DD'

const formatDateString = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function CreateSprint() {
  const [searchParams] = useSearchParams()
  const onFinish = (value: CreateSprintRequest) => {
    value.finishDate = formatDateString(value.finishDate)
    value.projectId = Number(searchParams.get('projectId'))
    sprintApi.startSprint(value)
  }
  const onFinishFailed = () => {}
  return (
    <div className={styles.container}>
      <Form
        name="basic"
        className={styles.createSprint}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className={styles.separated}>Create Sprint</h2>

        <Form.Item<CreateSprintRequest>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<CreateSprintRequest>
          label="Finish Date"
          name="finishDate"
          rules={[{ required: true, message: 'Please input finish date!' }]}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>

        <Form.Item style={{ margin: 0 }} wrapperCol={{ offset: 4, span: 16 }}>
          <Button className={styles.separated} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
