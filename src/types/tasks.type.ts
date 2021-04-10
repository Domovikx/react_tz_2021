export interface Task {
  _id?: string;
  username: string;
  email: string;
  text: string;
  status: number;
  __v?: 0;
}

export type Tasks = Task[];
