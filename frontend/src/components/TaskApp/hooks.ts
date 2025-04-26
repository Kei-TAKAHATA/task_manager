import { Task, Priority } from './types';

export const addTaskLogic = (
  content: string,
  tasks: Task[],
  dueDate?: string,
  priority?: Priority
): Task[] => {
  const newTask: Task = { id: Date.now(), content, isCompleted: false, dueDate, priority};
  return [...tasks, newTask];
};

export const toggleTaskCompletion = (id: number, tasks: Task[]): Task[] => {
  return tasks.map(task =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
};

export const deleteTaskLogic = (id: number, tasks: Task[]): Task[] => {
  return tasks.filter(task => task.id !== id);
};
