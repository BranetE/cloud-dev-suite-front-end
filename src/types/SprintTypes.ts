export interface CreateSprintRequest {
  title: string;
  project: number;
}

export type SprintType = {
  id: number;
  title: string;
  status: string;
  startDate: string;
  endDate?: string;
};
