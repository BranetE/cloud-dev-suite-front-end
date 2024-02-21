import { Button, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header, Content } from 'antd/es/layout/layout'
import { Employee } from 'components/employee/Employee'
import { Shifts } from 'components/shift/Shifts'
import { Projects } from 'components/project/Projects'
import { Tasks } from 'components/task/Tasks'
import { useEffect, useState } from 'react'
import { employeeApi } from 'api/employeeAPI'
import { EmployeeType } from 'types/EmployeeTypes'
import { useParams } from 'react-router-dom'
import { taskApi } from 'api/taskAPI'
import { TaskType } from 'types/TaskTypes'
import { ShiftType } from 'types/ShiftTypes'
import { ProjectType } from 'types/ProjectTypes'
import { shiftApi } from 'api/shiftAPI'
import { projectApi } from 'api/projectAPI'
import { useGetLoggedIn } from 'provider/AuthProvider'

const LayoutStyle = {
  backgroundColor: 'rgba(240, 240, 240, 0.979)',
}

const SiderStyle = {
  paddingTop: '3%',
  backgroundColor: 'rgba(240, 240, 240, 0.979)',
}

const HeaderStyle = {
  padding: '0',
  display: 'flex',
  justifyItems: 'space-around',
  backgroundColor: 'rgba(240, 240, 240, 0.979)',
}

const ButtonStyle = {
  margin: '10px',
}

export function EmployeePage(): JSX.Element {
  const { employeeId } = useParams() as { employeeId: string }
  const [contentType, setContentType] = useState<string>('shift')
  const [employee, setEmployee] = useState<EmployeeType>({
    email: '',
    firstName: '',
    lastName: '',
    position: '',
    experience: '',
  })
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [shifts, setShifts] = useState<ShiftType[]>([])
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [taskButtonState, setTaskButtonState] = useState<boolean>(true)
  const [shiftButtonState, setShiftButtonState] = useState<boolean>(false)
  const [projectButtonState, setProjectButtonState] = useState<boolean>(true)
  const { position } = useGetLoggedIn()
  useEffect(() => {
    employeeApi.getEmployee(employeeId).then((res) => setEmployee(res.data))
    taskApi.getAllTasksByEmployee(employeeId).then((res) => setTasks(res.data))
    shiftApi
      .getAllShiftsByEmployee(employeeId)
      .then((res) => setShifts(res.data))
    if (position == 'MANAGER') {
      projectApi.getAllProjects().then((res) => setProjects(res.data))
    } else {
      projectApi
        .getAllProjectsByEmployee(employeeId)
        .then((res) => setProjects(res.data))
    }
  }, [employeeId, position])

  const RenderCorrectView = ({
    contentType,
  }: {
    contentType: string
  }): JSX.Element => {
    if (contentType === 'projects') return <Projects projects={projects} />
    else if (contentType === 'tasks') return <Tasks tasks={tasks} />
    else return <Shifts shifts={shifts} />
  }

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Employee employee={employee} />
      </Sider>

      <Layout>
        <Header style={HeaderStyle}>
          <Button
            style={ButtonStyle}
            type="primary"
            ghost={shiftButtonState}
            onClick={() => {
              setContentType('shifts')
              setShiftButtonState((prev) => !prev)
            }}
          >
            Shifts
          </Button>
          <Button
            style={ButtonStyle}
            type="primary"
            ghost={projectButtonState}
            onClick={() => {
              setContentType('projects')
              setProjectButtonState((prev) => !prev)
            }}
          >
            Projects
          </Button>
          <Button
            style={ButtonStyle}
            type="primary"
            ghost={taskButtonState}
            onClick={() => {
              setContentType('tasks')
              setTaskButtonState((prev) => !prev)
            }}
          >
            Tasks
          </Button>
        </Header>

        <Content>
          <RenderCorrectView contentType={contentType} />
        </Content>
      </Layout>
    </Layout>
  )
}
