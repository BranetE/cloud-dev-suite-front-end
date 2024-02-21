import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import styles from './CreateProject.module.css'
import { employeeApi } from 'api/employeeAPI'
import { EmployeeCompactType } from 'types/EmployeeTypes'
import { CreateProjectRequest } from 'types/ProjectTypes'
import { projectApi } from 'api/projectAPI'

const onFinish = (request: CreateProjectRequest) => {
  projectApi.createProject(request)
}
const onFinishFailed = () => {
  console.error('Didn`t managed to create project')
}

const { Option } = Select

export function CreateProject(): JSX.Element {
  const [teamLeads, setTeamLeads] = useState<EmployeeCompactType[]>([])

  useEffect(() => {
    employeeApi
      .getEmployeesByPositionAndExperience('TEAM_LEAD')
      .then((res) => setTeamLeads(res.data))
  }, [])

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        className={styles.createProject}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className={styles.separated}>Create Project</h2>
        <Form.Item<CreateProjectRequest>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<CreateProjectRequest>
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <TextArea rows={4} placeholder="maxLength is 500" maxLength={500} />
        </Form.Item>
        <Form.Item<CreateProjectRequest>
          label="Status"
          name="status"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<CreateProjectRequest> label="Team Lead" name="teamLeadId">
          <Select>
            {teamLeads.map((t) => (
              <Option key={t.id}>{t.firstName + ' ' + t.lastName}</Option>
            ))}
          </Select>
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
