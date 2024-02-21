export interface CreateSprintRequest {
  title: string
  projectId: number
  finishDate: string
}

export type SprintType = {
  id: number
  title: string
  status: string
  startDate: string
  endDate?: string
}
