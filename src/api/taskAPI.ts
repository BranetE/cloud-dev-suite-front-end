import { TaskType, CreateTaskRequest } from 'types/TaskTypes'
import { instance } from './axiosConfig'

export const taskApi = {
  getAllTasksBySprint(sprintId: string) {
    return instance.get<TaskType[]>(`/task/getBySprint/${sprintId}/open`)
  },
  createTask(request: CreateTaskRequest) {
    return instance.post(`/task/create`, request)
  },
  getAllTasksByEmployee(employeeId: string) {
    return instance.get<TaskType[]>(`/task/getByEmployee/${employeeId}`)
  },
  getAllTasksByShift(shiftId: string) {
    return instance.get<TaskType[]>(`tasks/getByShift/${shiftId}`)
  },
  getTask(taskId: string) {
    return instance.get<TaskType>(`/task/${taskId}`)
  },
  changeStatus(taskId: string, status: string) {
    const params = new URLSearchParams()
    params.append('status', `${status}`)

    return instance.put(`/task/${taskId}`, params)
  },
  finishTask(taskId: string) {
    return instance.put(`task/${taskId}`)
  },
}
