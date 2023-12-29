import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Shift } from "components/shift/Shift";
// import { Tasks } from "components/task/Tasks";

const LayoutStyle = {
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const SiderStyle = {
    // paddingTop: "3%",
    marginLeft: "0", 
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

export function ShiftsPage(): JSX.Element {
    return (
        <Layout
      style={LayoutStyle}
    >
        <Sider 
            width="15%" 
            style={SiderStyle}
        >
          <Shift
            shiftType="Remote"
            startTime="10/12/2023"
            endTime="11/12/2023"
          />
        </Sider>
        <Layout>
          <Content>
            {/* <Tasks/> */}
          </Content>
        </Layout>
      </Layout>
    )
}