export type Priority = '低' | '中' | '高' | '未設定';

export interface Task {
    id: number;
    content: string;
    isCompleted: boolean;
    dueDate?: string;      // 期限（例: "2024-05-01"）
    priority?: Priority;   // 優先度
  }
