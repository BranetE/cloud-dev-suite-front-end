import { EmployeeCompactType, EmployeeType } from 'types/EmployeeTypes'
import { instance } from './axiosConfig'

export const employeeApi = {
  getEmployee(id: string) {
    return instance.get<EmployeeType>(`/employee/${id}`)
  },
  getAllEmployees() {
    return instance.get<EmployeeType[]>(`/employee`)
  },
  getAllEmployeesByProject(projectId: string) {
    return instance.get<EmployeeType[]>(
      `/employee/getAllByProject/${projectId}`
    )
  },
  getEmployeesByPositionAndExperience(position?: string, experience?: string) {
    const params = new URLSearchParams()
    if (position !== undefined) {
      params.append('position', `${position}`)
    }
    if (experience !== undefined) {
      params.append('experience', `${experience}`)
    }

    return instance.get<EmployeeCompactType[]>(
      `/employee/getByPositionAndOrExperience`,
      { params }
    )
  },
}
