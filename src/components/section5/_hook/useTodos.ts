import { useSuspenseQuery } from '@tanstack/react-query';
import type { Todo } from '@/components/section5/_type/todo';

export const useTodos = () =>
  useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!res.ok) throw new Error('Fetch Todos Error');

      return res.json() as Promise<Todo[]>;
    },
  });
