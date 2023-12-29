export type ProjectType = {
    title?: string,
    description?: string,
    startDate?: string
}

export interface CreateProjectRequest{
    title: string,
    description: string,
    responsibleEmployeeId: number
}