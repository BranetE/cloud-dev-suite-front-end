import { CreateProjectRequest, ProjectType } from 'types/ProjectTypes'
import { instance } from './axiosConfig'

export const projectApi = {
  createProject(request: CreateProjectRequest) {
    return instance.post(`/project`, request)
  },
  getAllProjectsByEmployee(employeeId: string) {
    return instance.get<ProjectType[]>(`/project/getByEmployee/${employeeId}`)
  },
  getProject(projectId: string) {
    return instance.get<ProjectType>(`/project/${projectId}`)
  },
  addEmployee(projectId: string, employeeId: string) {
    return instance.patch(`/project/${projectId}/addEmployee/${employeeId}`)
  },
  removeEmployee(projectId: string, employeeId: string) {
    return instance.patch(`/project/${projectId}/removeEmployee/${employeeId}`)
  },
  changeStatus(projectId: string) {
    return instance.patch(`/project/changeStatus/${projectId}`)
  },
  changeResponsibleEmployee(projectId: string) {
    return instance.patch(`/project/changeResponsibleEmployee/${projectId}`)
  },
}
