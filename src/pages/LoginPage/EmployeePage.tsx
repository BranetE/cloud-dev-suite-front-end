import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Employee } from "components/EmployeeComponents/Employee";
import { Shifts } from "components/ShiftComponents/Shifts";
import { Projects } from "components/ProjectComponents/Projects";
import { Tasks } from "components/TaskComponents/Tasks";
import { useState } from "react";

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

    return(
    <Layout
      style={LayoutStyle}
    >
        <Sider 
            width="15%" 
            style={SiderStyle}
        >
          <Employee 
            email="email@mail.com"
            firstName="Employee"
            lastName="Employee"
            position="Developer"
            experience="Middle"
          />
        </Sider>
        <Layout>
          <Header 
            style={HeaderStyle}
          >
            <Button 
                style={ButtonStyle}
                type="primary" 
                ghost
                onClick={() => setContentType("shifts")}
            >
                Shifts
            </Button>
            <Button
                style={ButtonStyle} 
                type="primary" 
                ghost
                onClick={() => setContentType("projects")}
            >
                Projects
            </Button>
            <Button
                style={ButtonStyle} 
                type="primary" 
                ghost
                onClick={() => setContentType("tasks")}
            >
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