import { EmployeeType } from "types/EmployeeTypes";
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
};
