import React, { useState } from 'react';
import { TaskItem } from '../TaskItem';
import { TaskInput } from '../TaskInput';
import { Task } from './types';
import { addTaskLogic, toggleTaskCompletion, deleteTaskLogic } from './hooks';

export const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (content: string) => {
    const newTask = addTaskLogic(content, tasks);
    setTasks(newTask);
  };

  const toggleCompletion = (id: number) => {
    setTasks(toggleTaskCompletion(id, tasks));
  };

  const deleteTask = (id: number) => {
    setTasks(deleteTaskLogic(id, tasks));
  };

  return (
    <div className="task-app">
      <h1>タスク管理</h1>
      <TaskInput addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
