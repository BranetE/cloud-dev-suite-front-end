import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Project } from "components/ProjectComponents/Project";
import { Sprints } from "components/SprintComponents/Sprints";

const LayoutStyle = {
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const SiderStyle = {
    // paddingTop: "3%",
    marginLeft: "0", 
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

export function ProjectPage() {
    return (
        <Layout
      style={LayoutStyle}
    >
        <Sider 
            width="15%" 
            style={SiderStyle}
        >
          <Project 
            title="Cloud Dev Suite"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            startDate="10/12/2023"
            teamLead={
                {
                    firstName: "Lead",
                    lastName: "Lead"
                }
            }
          />
        </Sider>
        <Layout>
          <Content>
            <Sprints/>
          </Content>
        </Layout>
      </Layout>
    )
}