export interface CreateTaskRequest {
  title: string
  description: string
  sprintId: number
}

export interface TaskType {
  id: number
  title: string
  status: string
  description: string
  employeeId?: number
  comment?: string
  finishTime?: string
}
