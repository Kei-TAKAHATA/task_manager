import React, { useState } from 'react';
import { TaskInputProps } from './types';


export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (inputValue.trim()) {
        addTask(inputValue);
        setInputValue('');  // 入力欄をリセット
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <button type="submit">追加</button>
      </form>
    );
  };
