import { CreateSprintRequest, SprintType } from "types/SprintTypes";
import { instance } from "./axiosConfig";

export const sprintApi = {
  getSprint(sprintId: number) {
    return instance.get<SprintType>(`/sprint/${sprintId}`);
  },
  startSprint(request: CreateSprintRequest) {
    return instance.post(`/sprint/start`, request);
  },
  getCurrentSprintForProject(projectId: number) {
    return instance.get<SprintType>(
      `/sprint/getCurrentForProject/${projectId}`
    );
  },
  getAllSprintsForProject(projectId: number) {
    return instance.get<SprintType[]>(`/sprint/project/${projectId}`);
  },
  finishSprint(sprintId: number) {
    return instance.put(`/sprint/finish/${sprintId}`);
  },
};
