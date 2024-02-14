import { EmployeeCompactType, EmployeeType } from "types/EmployeeTypes";
import { instance } from "./axiosConfig";

export const employeeApi = {
  getEmployee(id: number) {
    return instance.get<EmployeeType>(`/employee/${id}`);
  },
  getAllEmployees() {
    return instance.get<EmployeeType[]>(`/employee`);
  },
  getAllEmployeesByProject(projectId: number) {
    return instance.get<EmployeeType[]>(
      `/employee/getAllByProject/${projectId}`
    );
  },
  getEmployeesByPositionAndExperience(position?: string, experience?: string) {
    const params = new URLSearchParams();
    params.append("position", `${position}`);
    params.append("experience", `${experience}`);

    return instance.get<EmployeeCompactType[]>(
      `/employee/getByPositionAndOrExperience`,
      { params }
    );
  },
};
