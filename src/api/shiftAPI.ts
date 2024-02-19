import { ShiftType } from 'types/ShiftTypes'
import { instance } from './axiosConfig'

export const shiftApi = {
  startShift(shiftType: string) {
    const params = new URLSearchParams()
    params.append('shiftType', `${shiftType}`)

    return instance.post(`/shift/start`, { shiftType: shiftType })
  },
  getCurrent() {
    return instance.get<ShiftType>(`/shift/getCurrent`)
  },
  getShift(shiftId: string) {
    return instance.get<ShiftType>(`/shift/${shiftId}`)
  },
  getAllShiftsByEmployee(employeeId: string) {
    return instance.get<ShiftType[]>(`/shift/getAllByEmployee/${employeeId}`)
  },
  addTask(taskId: string) {
    const params = new URLSearchParams()
    params.append('taskId', `${taskId}`)

    return instance.patch(`/shift/addTask`, { params })
  },
  removeTask(shiftId: string, taskId: string) {
    const params = new URLSearchParams()
    params.append('taskId', `${taskId}`)

    return instance.patch(`/shift/${shiftId}/addTask`, { params })
  },
  finishShift(employeeId: string) {
    return instance.patch(`/shift/end/${employeeId}`)
  },
}
