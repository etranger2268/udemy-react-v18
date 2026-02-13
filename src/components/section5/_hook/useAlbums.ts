import { useSuspenseQuery } from '@tanstack/react-query';
import type { Album } from '@/components/section5/_type/album';

export const useAlbums = () =>
  useSuspenseQuery({
    queryKey: ['albums'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!res.ok) throw new Error('Fetch Albums Error');

      return res.json() as Promise<Album[]>;
    },
  });
