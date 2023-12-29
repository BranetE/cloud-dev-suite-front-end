import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Sprint } from "components/SprintComponents/Sprint";
import { Tasks } from "components/TaskComponents/Tasks";

const LayoutStyle = {
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const SiderStyle = {
    // paddingTop: "3%",
    marginLeft: "0", 
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

export function SprintsPage(): JSX.Element {
    return (
        <Layout
      style={LayoutStyle}
    >
        <Sider 
            width="15%" 
            style={SiderStyle}
        >
          <Sprint 
            title="Cloud Dev Suite"
            status="Open"
            startDate="10/12/2023"
            endDate="12/12/2023"
          />
        </Sider>
        <Layout>
          <Content>
            <Tasks/>
          </Content>
        </Layout>
      </Layout>
    )
}