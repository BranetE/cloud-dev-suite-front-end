import { TaskType, CreateTaskRequest } from "types/TaskTypes";
import { instance } from "./axiosConfig";

export const taskApi = {
  getAllTasksBySprint(sprintId: number) {
    return instance.get<TaskType[]>(`/task/getBySprint/${sprintId}`);
  },
  createTask(request: CreateTaskRequest) {
    return instance.post(`/task/create`, request);
  },
  getAllTasksByEmployee(employeeId: number) {
    return instance.get<TaskType[]>(`/task/getAllByEmployeeId/${employeeId}`);
  },
  getAllTasksByShift(shiftId: number) {
    return instance.get<TaskType[]>(`tasks/getByShift/${shiftId}`);
  },
  getTask(taskId: number) {
    return instance.get<TaskType>(`/task/${taskId}`);
  },
  changeStatus(taskId: number) {
    return instance.patch(`/task/${taskId}`);
  },
  finishTask(taskId: number) {
    return instance.put(`task/${taskId}`);
  },
};
