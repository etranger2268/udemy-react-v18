import type { Task } from '@/components/section4/_type/task';
import { MEMBER } from '@/components/section4/constants/member';

export const generateDummyTask = (): Task[] =>
  Array.from({ length: 10000 }, (_, index) => {
    const idx = index + 1;
    const memberCount = Object.keys(MEMBER).length;
    const key = (idx % memberCount) as keyof typeof MEMBER;
    return {
      id: idx,
      title: `task-${idx}`,
      assignee: MEMBER[key],
    };
  });
