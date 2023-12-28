import { EmployeePage } from "pages/LoginPage/EmployeePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { ProjectPage } from "pages/ProjectPage/ProjectPage";
import { SprintsPage } from "pages/SprintPage/SprintsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProject } from "pages/ProjectPage/CreateProject";
import { CreateSprint } from "pages/SprintPage/CreateSprint";
import { CreateTask } from "pages/TaskPage/CreateTask";
import { CreateShift } from "pages/ShiftPage/CreateShift";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/employee" element={<EmployeePage/>}/>
                <Route path="/project" element={<ProjectPage/>}/>
                <Route path="/sprint" element={<SprintsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="create-project" element={<CreateProject/>}/>
                <Route path="create-sprint" element={<CreateSprint/>}/>
                <Route path="create-task" element={<CreateTask/>}/>
                <Route path="open-shift" element={<CreateShift/>}/>
            </Routes>
        </BrowserRouter>
    )
}