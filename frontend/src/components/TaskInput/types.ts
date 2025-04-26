import { Priority } from '../TaskApp/types';

export interface TaskInputProps {
    addTask: (content: string, dueDate?: string, priority?: Priority) => void;
  }
