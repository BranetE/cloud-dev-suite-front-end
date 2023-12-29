import { EmployeePage } from "pages/login/EmployeePage";
import { LoginPage } from "pages/login/LoginPage";
import { ProjectPage } from "pages/project/ProjectPage";
import { SprintsPage } from "pages/sprint/SprintsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProject } from "pages/project/CreateProject";
import { CreateSprint } from "pages/sprint/CreateSprint";
import { CreateTask } from "pages/task/CreateTask";
import { CreateShift } from "pages/shift/CreateShift";
import { RegisterPage } from "pages/register/RegisterPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/employee" element={<EmployeePage/>}/>
                {/* <Route path="/project" element={<ProjectPage/>}/> */}
                {/* <Route path="/sprint" element={<SprintsPage/>}/> */}
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