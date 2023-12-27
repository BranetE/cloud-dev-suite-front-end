import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RegisterPage } from "./pages/RegisterPage";
import { Projects } from "components/ProjectComponents/Projects";
import { Shifts } from "components/ShiftComponents/Shifts";
import { Tasks } from "components/TaskComponents/Tasks";
import { Sprints } from "components/SprintComponents/Sprints";
import { Employee } from "components/EmployeeComponents/Employee";
import { Employees } from "components/EmployeeComponents/Employees";
import { Task } from "components/TaskComponents/Task";
import { Project } from "components/ProjectComponents/Project";
import { Sprint } from "components/SprintComponents/Sprint";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Sprint
      title="Sprint 2"
      status="Open"
      startDate="10/12/2023"
      endDate="12/13/2023"  
    />
  </React.StrictMode>
);
