import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { sprintApi } from "api/sprintApi";
import { Sprint } from "components/sprint/Sprint";
import { Tasks } from "components/task/Tasks";
import { useEffect, useState } from "react";
import { SprintType } from "types/SprintTypes";

const LayoutStyle = {
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

const SiderStyle = {
    // paddingTop: "3%",
    marginLeft: "0", 
    backgroundColor: "rgba(240, 240, 240, 0.979)",
}

export function SprintsPage({sprintId}: {sprintId: number}): JSX.Element {
    
  const [sprint, setSprint] = useState<SprintType>()

  useEffect(() => {
    sprintApi.getSprint(sprintId)
    .then(res => setSprint(res.data))
  }, [sprintId])
  
  
  return (
        <Layout
      style={LayoutStyle}
    >
        <Sider 
            width="15%" 
            style={SiderStyle}
        >
          <Sprint {...sprint}/>
        </Sider>
        <Layout>
          <Content>
            <Tasks sprintId={sprintId}/>
          </Content>
        </Layout>
      </Layout>
    )
}