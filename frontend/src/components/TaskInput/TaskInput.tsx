import React, { useState } from 'react';
import { TaskInputProps } from './types';
import { StyledTaskInput, StyledTaskInputDate, StyledInputButton } from './styles';


export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (inputValue.trim()) {
        addTask(inputValue, dueDate);
        setInputValue('');  // 入力欄をリセット
        setDueDate('');
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
        <StyledInputButton type="submit">
          追加
        </StyledInputButton>
      </form>
    );
  };
