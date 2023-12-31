export interface CreateTaskRequest {
  title: string;
  description: string;
  sprintId: number;
}

export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: string;
  comment: string;
  finishTime?: string;
};
