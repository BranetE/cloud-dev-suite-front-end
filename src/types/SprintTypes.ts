export interface CreateSprintRequest {
    title: string,
    project: number
}

export type SprintType = {
    title?: string,
    status?: string,
    startDate?: string,
    endDate?: string
}