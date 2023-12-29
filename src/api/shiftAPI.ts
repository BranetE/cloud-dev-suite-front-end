import { ShiftType } from "types/ShiftTypes";
import { instance } from "./axiosConfig"

export const shiftApi = {
    startShift() {
        return instance.post(`/shift/start`)
    },
    getCurrent() {
        return instance.get<ShiftType>(`/shift/getCurrent`)
    },
    getAllShiftsByEmployee(employeeId: number) {
        return instance.get<ShiftType[]>(`/shifts/getAllByEmployee/${employeeId}`)
    },
    addTask(taskId: number) {
        const params = new URLSearchParams();
        params.append('taskId', `${taskId}`)

        return instance.patch(`/shift/addTask`, params)
    },
    removeTask(shiftId: number, taskId: number) {
        const params = new URLSearchParams();
        params.append('taskId', `${taskId}`)

        return instance.patch(`/shift/${shiftId}/addTask`, params)
    },
    finishShift(employeeId: number) {
        return instance.patch(`/shift/end/${employeeId}`)
    }
}