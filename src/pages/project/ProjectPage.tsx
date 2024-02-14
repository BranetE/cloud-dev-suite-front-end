import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { projectApi } from "api/projectAPI";
import { sprintApi } from "api/sprintApi";
import { Project } from "components/project/Project";
import { Sprints } from "components/sprint/Sprints";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectType } from "types/ProjectTypes";
import { SprintType } from "types/SprintTypes";

const LayoutStyle = {
  backgroundColor: "rgba(240, 240, 240, 0.979)",
};

const SiderStyle = {
  marginLeft: "0",
  backgroundColor: "rgba(240, 240, 240, 0.979)",
};

export function ProjectPage() {
  const projectId = Number(useParams);
  const [project, setProject] = useState<ProjectType>({
    id: 0,
    title: "",
    description: "",
    status: "",
  });
  const [sprints, setSprints] = useState<SprintType[]>([]);

  useEffect(() => {
    projectApi.getProject(projectId).then((res) => setProject(res.data));
    sprintApi
      .getAllSprintsForProject(projectId)
      .then((res) => setSprints(res.data));
  }, [projectId]);

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Project project={project} />
      </Sider>
      <Layout>
        <Content>
          <Sprints sprints={sprints} />
        </Content>
      </Layout>
    </Layout>
  );
}
