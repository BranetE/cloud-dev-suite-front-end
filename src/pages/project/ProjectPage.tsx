import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { projectApi } from "api/projectAPI";
import { Project } from "components/project/Project";
import { Sprints } from "components/sprint/Sprints";
import { useEffect, useState } from "react";
import { ProjectType } from "types/ProjectTypes";

const LayoutStyle = {
  backgroundColor: "rgba(240, 240, 240, 0.979)",
};

const SiderStyle = {
  // paddingTop: "3%",
  marginLeft: "0",
  backgroundColor: "rgba(240, 240, 240, 0.979)",
};

export function ProjectPage({ projectId }: { projectId: number }) {
  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    projectApi.getProject(projectId).then((res) => setProject(res.data));
  }, [projectId]);

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Project {...project} />
      </Sider>
      <Layout>
        <Content>
          <Sprints projectId={projectId} />
        </Content>
      </Layout>
    </Layout>
  );
}
