export interface CreateTaskRequest {
    title: string,
    description: string,
    sprintId: number
}

export interface TaskType {
    title: string,
    description: string,
    status: string,
    comment?: string,
    finishTime: string
}