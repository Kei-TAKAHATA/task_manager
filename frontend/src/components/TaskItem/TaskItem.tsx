import React from 'react';
import { TaskItemProps } from './types';
import { Task, Priority } from '../TaskApp/types';

export const TaskItem: React.FC<TaskItemProps & { changePriority: (id: number, priority: Priority) => void }> = ({
  task, toggleCompletion, deleteTask, changePriority
}) => {
  return (
    <li className="task-item">
      <span
        onClick={() => toggleCompletion(task.id)}
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.content}
      </span>
      {task.dueDate && (
        <span style={{ marginLeft: '1em', color: '#888' }}>
          期日: {task.dueDate}
        </span>
      )}
      <select
        value={task.priority}
        onChange={e => changePriority(task.id, e.target.value as Priority)}
        style={{ marginLeft: '1em' }}
      >
        <option value="高">高</option>
        <option value="中">中</option>
        <option value="低">低</option>
        <option value="未設定">未設定</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>削除</button>
    </li>
  );
};
