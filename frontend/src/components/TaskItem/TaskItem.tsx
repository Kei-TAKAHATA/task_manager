import React from 'react';
import { TaskItemProps } from './types';
import { Task } from '../TaskApp/types';
// import { toggleTaskCompletion, deleteTask } from './hooks';

export const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <li className="task-item">
      <span
        onClick={() => toggleCompletion(task.id)}
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.content}
      </span>
      <button onClick={() => deleteTask(task.id)}>削除</button>
    </li>
  );
};
