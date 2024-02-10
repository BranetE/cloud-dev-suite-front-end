import { CreateProjectRequest, ProjectType } from "types/ProjectTypes"
import { instance } from "./axiosConfig"

export const projectApi = {
    createProject(request: CreateProjectRequest) {
        return instance.post(`/project`, request)
        .catch(error => console.error(error))
    },
    getAllProjectsByEmployee(employeeId: number) {
        return instance.get<ProjectType[]>(`/project/getByEmployee/${employeeId}`)
        .catch(error => console.error(error))
    },
    getProject(projectId: number) {
        return instance.get<ProjectType>(`/project/${projectId}`)
        .catch(error => console.error(error))
    },
    addEmployee(projectId: number, employeeId: number){
        return instance.patch(`/project/${projectId}/addEmployee/${employeeId}`)
        .catch(error => console.error(error))
    },
    removeEmployee(projectId: number, employeeId: number){
        return instance.patch(`/project/${projectId}/removeEmployee/${employeeId}`)
        .catch(error => console.error(error))
    },
    changeStatus(projectId: number){
        return instance.patch(`/project/changeStatus/${projectId}`)
        .catch(error => console.error(error))
    },
    changeResponsibleEmployee(projectId: number){
        return instance.patch(`/project/changeResponsibleEmployee/${projectId}`)
        .catch(error => console.error(error))
    }
}