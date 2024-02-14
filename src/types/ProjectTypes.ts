export type ProjectType = {
  id: number;
  title: string;
  description: string;
  status: string;
  startDate?: string;
};

export interface CreateProjectRequest {
  title: string;
  description: string;
  status: string;
  teamLeadId: number;
}
