import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Shift } from "components/shift/Shift";
import { LayoutStyle, SiderStyle } from "pages/styles/Styles";
import { useParams } from "react-router-dom";
import { ShiftType } from "types/ShiftTypes";
import { TaskType } from '../../types/TaskTypes';
import { useEffect } from "react";
import { shiftApi } from "api/shiftAPI";

export function ShiftsPage(): JSX.Element {

  const shiftId = Number(useParams())
  const [shift, setShift] = useState<ShiftType>()
  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(
    () => {
      shiftApi.
    }
  )

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