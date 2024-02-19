import { CreateSprintRequest, SprintType } from 'types/SprintTypes'
import { instance } from './axiosConfig'

export const sprintApi = {
  getSprint(sprintId: string) {
    return instance.get<SprintType>(`/sprint/${sprintId}`)
  },
  startSprint(request: CreateSprintRequest) {
    return instance.post(`/sprint/start`, request)
  },
  getCurrentSprintForProject(projectId: string) {
    return instance.get<SprintType>(`/sprint/getCurrentForProject/${projectId}`)
  },
  getAllSprintsForProject(projectId: string) {
    return instance.get<SprintType[]>(`/sprint/project/${projectId}`)
  },
  finishSprint(sprintId: string) {
    return instance.put(`/sprint/finish/${sprintId}`)
  },
}
