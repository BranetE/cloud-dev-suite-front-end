import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content } from "antd/es/layout/layout";
import { Employee } from "components/employee/Employee";
import { Shifts } from "components/shift/Shifts";
import { Projects } from "components/project/Projects";
import { Tasks } from "components/task/Tasks";
import { useEffect, useState } from "react";
import { employeeApi } from "api/employeeAPI";
import { EmployeeType } from "types/EmployeeTypes";
import { ShiftType } from "types/ShiftTypes";
import { TaskType } from "types/TaskTypes";
import { ProjectType } from "types/ProjectTypes";
import { shiftApi } from "api/shiftAPI";
import { taskApi } from "api/taskAPI";

const LayoutStyle = {
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const SiderStyle = {
    paddingTop: "3%",
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const HeaderStyle = {
    padding: "0",
    display: "flex",
    justifyItems: "space-around",
    backgroundColor: "rgba(240, 240, 240, 0.979)"
}

const ButtonStyle = {
    margin: "10px" 
}

export function EmployeePage(): JSX.Element {
    
    const [contentType, setContentType] = useState<string>("shift")
    const [employee, setEmployee] = useState<EmployeeType>()
    const [content, setContent] = useState<ShiftType[] | TaskType[] | ProjectType[]>()

    useEffect(() => {
      employeeApi.getEmployee(1)
        .then(res => setEmployee(res.data)
        )
    }, [])

    useEffect(() => {
      () => {
        if(contentType === `shifts`) return shiftApi.getAllShiftsByEmployee(1)
        if(contentType === "tasks") return taskApi.getAllTasksByEmployee(1)
        if(contentType === "projects") return taskApi.getAllTasksByEmployee(1)
      }
    })
    
    return(
    <Layout style={LayoutStyle}>
        <Sider width="15%" style={SiderStyle}>
          <Employee {...employee}/>
        </Sider>

        <Layout>
          <Header style={HeaderStyle}>
            <Button style={ButtonStyle} type="primary" ghost onClick={() => setContentType("shifts")}>
                Shifts
            </Button>
            <Button style={ButtonStyle} type="primary" onClick={() => setContentType("projects")}>
                Projects
            </Button>
            <Button style={ButtonStyle} type="primary" ghost onClick={() => setContentType("tasks")}>
                Tasks
            </Button>
          </Header>

          <Content>
            <RenderCorrectView content={contentType}/>
          </Content>
        </Layout>
      </Layout>
    )
}

function RenderCorrectView({content}: {content: string}): JSX.Element {
    if(content === "projects") return <Projects/>
    else if(content === "tasks") return <Tasks/>
    else return <Shifts/>
}