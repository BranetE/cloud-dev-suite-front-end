import { LoginPage } from 'pages/login/LoginPage'
import { EmployeePage } from 'pages/login/EmployeePage'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import { CreateProject } from 'pages/project/CreateProject'
import { CreateSprint } from 'pages/sprint/CreateSprint'
import { CreateTask } from 'pages/task/CreateTask'
import { CreateShift } from 'pages/shift/CreateShift'
import { RegisterPage } from 'pages/register/RegisterPage'
import { TaskPage } from 'pages/task/TaskPage'
import { ShiftPage } from 'pages/shift/ShiftPage'
import { ProjectPage } from 'pages/project/ProjectPage'
import { SprintPage } from 'pages/sprint/SprintPage'
import { AuthProvider, useAuth } from './provider/AuthProvider'

const PrivateRoutes = () => {
  const { token } = useAuth()
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/employee/:employeeId" element={<EmployeePage />} />
            <Route path="/task/:taskId" element={<TaskPage />} />
            <Route path="shift/:shiftId" element={<ShiftPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/sprint/:sprintId" element={<SprintPage />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/create-sprint" element={<CreateSprint />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/open-shift" element={<CreateShift />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
