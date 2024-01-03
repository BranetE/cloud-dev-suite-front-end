import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Task } from "components/task/Task";

export function TaskPage(): JSX.Element {
  return (
    <Layout style={}>
      <Sider width="25%" style={}>
        <Task />
      </Sider>
    </Layout>
  );
}
