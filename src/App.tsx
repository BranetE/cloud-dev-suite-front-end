import { EmployeePage } from "pages/login/EmployeePage";
import { LoginPage } from "pages/login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProject } from "pages/project/CreateProject";
import { CreateSprint } from "pages/sprint/CreateSprint";
import { CreateTask } from "pages/task/CreateTask";
import { CreateShift } from "pages/shift/CreateShift";
import { RegisterPage } from "pages/register/RegisterPage";
import { TaskPage } from "pages/task/TaskPage";
import { ShiftPage } from "pages/shift/ShiftPage";
import { ProjectPage } from "pages/project/ProjectPage";
import { SprintPage } from "pages/sprint/SprintPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employee/:id" element={<EmployeePage />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="shift/:id" element={<ShiftPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/sprint/:id" element={<SprintPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/create-sprint" element={<CreateSprint />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/open-shift" element={<CreateShift />} />
      </Routes>
    </BrowserRouter>
  );
}
