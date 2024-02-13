import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Shift } from "components/shift/Shift";
import { LayoutStyle, SiderStyle } from "pages/styles/Styles";
import { useParams } from "react-router-dom";
import { ShiftType } from "types/ShiftTypes";
import { useEffect, useState } from "react";
import { shiftApi } from "api/shiftAPI";
import { Tasks } from "components/task/Tasks";
import { TaskType } from "types/TaskTypes";
import { taskApi } from "api/taskAPI";

export function ShiftsPage(): JSX.Element {
  const shiftId = Number(useParams());
  const [shift, setShift] = useState<ShiftType>();
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    shiftApi.getShift(shiftId).then((res) => setShift(res.data));
    taskApi.getAllTasksByShift(shiftId).then((res) => setTasks(res.data));
  }, [shiftId]);

  return (
    <Layout style={LayoutStyle}>
      <Sider width="15%" style={SiderStyle}>
        <Shift {...shift} />
      </Sider>
      <Layout>
        <Content>
          <Tasks {...tasks} />
        </Content>
      </Layout>
    </Layout>
  );
}
