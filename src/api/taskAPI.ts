import { TaskType, CreateTaskRequest } from "types/TaskTypes";
import { instance } from "./axiosConfig"

export const taskApi = {
    getAllTasksBySprint(sprintId: number) {
        return instance.get<TaskType[]>(`/task/getBySprint/${sprintId}`)
        // .catch(error => console.error(error))
    },
    createTask(request: CreateTaskRequest) {
        return instance.post(`/task/create`, request)
        // .catch(error => console.error(error))
    },
    getAllTasksByEmployee(employeeId: number) {
        return instance.get<TaskType[]>(`/task/getAllByEmployeeId/${employeeId}`)
        // .catch(error => console.error(error))
    },
    getTask(taskId: number) {
        return instance.get<TaskType>(`/task/${taskId}`)
        // .catch(error => console.error(error))
    },
    changeStatus(taskId: number) {
        return instance.patch(`/task/${taskId}`)
        // .catch(error => console.error(error))
    },
    finishTask(taskId: number) {
        return instance.put(`task/${taskId}`)
        // .catch(error => console.error(error))
    }
}