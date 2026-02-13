import { useEffect, useState } from 'react';
import type { Album } from '@/components/section5/_type/album';

type UseAlbumsReturn = {
  isLoading: boolean;
  error: string | null;
  albums: Album[] | null;
};

export const useAlbums = (): UseAlbumsReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums', { signal });
        if (!res.ok) {
          throw new Error('Fetch Albums Error');
        }
        const data = (await res.json()) as Album[];
        setAlbums(data);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            console.error('Fetch aborted');
          } else {
            setError(err.message);
          }
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();

    return () => controller.abort();
  }, []);

  return { isLoading, error, albums };
};
