import { Task } from '../TaskApp/types';

export interface TaskItemProps {
    task: Task;
    toggleCompletion: (id: number) => void;
    deleteTask: (id: number) => void;
  }
