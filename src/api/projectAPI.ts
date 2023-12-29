import { CreateProjectRequest, ProjectType } from "types/ProjectTypes"
import { instance } from "./axiosConfig"

export const projectApi = {
    createProject(request: CreateProjectRequest) {
        return instance.post(`/project`, request)
    },
    getAllProjectsByEmployee(employeeId: number) {
        return instance.get(`/project/getByEmployee/${employeeId}`)
    },
    getProject(projectId: number) {
        return instance.get(`/project/${projectId}`)
    },
    addEmployee(projectId: number, employeeId: number){
        return instance.patch(`/project/${projectId}/addEmployee/${employeeId}`)
    },
    removeEmployee(projectId: number, employeeId: number){
        return instance.patch(`/project/${projectId}/removeEmployee/${employeeId}`)
    },
    changeStatus(projectId: number){
        return instance.patch(`/project/changeStatus/${projectId}`)
    },
    changeResponsibleEmployee(projectId: number){
        return instance.patch(`/project/changeResponsibleEmployee/${projectId}`)
    }
}