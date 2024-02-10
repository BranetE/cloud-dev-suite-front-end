import { ShiftType } from "types/ShiftTypes";
import { instance } from "./axiosConfig"

export const shiftApi = {
    startShift() {
        return instance.post(`/shift/start`)
        .catch(error => console.error(error))
    },
    getCurrent() {
        return instance.get<ShiftType>(`/shift/getCurrent`)
        .catch(error => console.error(error))
    },
    getAllShiftsByEmployee(employeeId: number) {
        return instance.get<ShiftType[]>(`/shifts/getAllByEmployee/${employeeId}`)
        .catch(error => console.error(error))
    },
    addTask(taskId: number) {
        const params = new URLSearchParams();
        params.append('taskId', `${taskId}`)

        return instance.patch(`/shift/addTask`, params)
        .catch(error => console.error(error))
    },
    removeTask(shiftId: number, taskId: number) {
        const params = new URLSearchParams();
        params.append('taskId', `${taskId}`)

        return instance.patch(`/shift/${shiftId}/addTask`, params)
        .catch(error => console.error(error))
    },
    finishShift(employeeId: number) {
        return instance.patch(`/shift/end/${employeeId}`)
        .catch(error => console.error(error))
    }
}