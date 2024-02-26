import { Button, Divider, Layout, Select } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { employeeApi } from 'api/employeeAPI'
import { projectApi } from 'api/projectAPI'
import { sprintApi } from 'api/sprintApi'
import { Project } from 'components/project/Project'
import { Sprints } from 'components/sprint/Sprints'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeType } from 'types/EmployeeTypes'
import { ProjectType } from 'types/ProjectTypes'
import { SprintType } from 'types/SprintTypes'
import { useDecodeJwtToken } from 'util/decodeToken'

const LayoutStyle = {
  backgroundColor: 'rgba(240, 240, 240, 0.979)',
}

const SiderStyle = {
  marginLeft: '0',
  backgroundColor: 'rgba(240, 240, 240, 0.979)',
}

const { Option } = Select

export function ProjectPage() {
  const { projectId } = useParams() as { projectId: string }
  const [project, setProject] = useState<ProjectType>({
    id: 0,
    title: 'Project Named project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    status: 'MAINTENANCE',
    startDate: '',
  })
  const [sprints, setSprints] = useState<SprintType[]>([])
  const [employees, setEmployees] = useState<EmployeeType[]>([
    {
      id: 0,
      email: 'email',
      firstName: 'dfsfdsfds',
      lastName: 'sdaasdas',
      position: 'Developer',
      experience: 'Junior',
    },
  ])
  const [employeeId, setEmployeeId] = useState<string>('')
  const navigate = useNavigate()
  const { position } = useDecodeJwtToken()

  useEffect(() => {
    projectApi.getProject(projectId).then((res) => setProject(res.data))
    sprintApi
      .getAllSprintsForProject(projectId)
      .then((res) => setSprints(res.data))
    employeeApi.getAllEmployees().then((res) => setEmployees(res.data))
  }, [projectId])

  const handleChange = (employeeId: string) => {
    setEmployeeId(employeeId)
  }

  const handleAddEmployee = () => {
    projectApi.addEmployee(projectId, employeeId)
  }

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Project project={project} />
        {position == 'TEAM_LEAD' ? (
          <>
            {' '}
            <Divider>Add an Employee</Divider>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Select
                onChange={handleChange}
                style={{ width: '100%', textAlign: 'center' }}
              >
                {employees.map((t) => (
                  <Option key={t.id}>
                    {`${t.firstName} ${t.lastName} ${t.experience} ${t.position}`}
                  </Option>
                ))}
              </Select>
              <Button
                type="primary"
                style={{ marginTop: '30px' }}
                onClick={handleAddEmployee}
              >
                Add Employee
              </Button>
            </div>{' '}
          </>
        ) : (
          <></>
        )}

        <Divider />
      </Sider>
      <Layout>
        <Content>
          {position == 'TEAM_LEAD' ? (
            <Button
              type="primary"
              style={{ margin: '15px' }}
              onClick={() => navigate(`/create-sprint?projectId=${projectId}`)}
            >
              Create Sprint
            </Button>
          ) : (
            <></>
          )}
          <Sprints sprints={sprints} />
        </Content>
      </Layout>
    </Layout>
  )
}
