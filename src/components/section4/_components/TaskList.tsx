import { memo } from 'react';
import type { Task } from '@/components/section4/_type/task';

type TaskProps = {
  task: Task;
};

const TaskList = memo(({ task }: TaskProps) => {
  return (
    <div className="bg-blue-100">
      <p>タイトル: {task.title}</p>
      <p>担当: {task.assignee}</p>
    </div>
  );
});

export default TaskList;
