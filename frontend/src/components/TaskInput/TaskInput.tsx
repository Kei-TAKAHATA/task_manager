import React, { useState } from 'react';
import { TaskInputProps } from './types';
import { StyledTaskInput, StyledTaskInputDate, StyledTaskInputPriority, StyledInputButton } from './styles';
import { Priority } from '../TaskApp/types';

export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [priority, setPriority] = useState<Priority>('未設定');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (inputValue.trim()) {
        addTask(inputValue, dueDate, priority);
        setInputValue('');  // 入力欄をリセット
        setDueDate('');
        setPriority('未設定');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <StyledTaskInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <StyledTaskInputDate
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="期限"
        />
        <StyledTaskInputPriority
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
        >
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
          <option value="未設定">未設定</option>
        </StyledTaskInputPriority>
        <StyledInputButton type="submit">
          追加
        </StyledInputButton>
      </form>
    );
  };
