import { useAlbums } from '@/components/section5/_hook/useAlbums';

const ReactQuery = () => {
  const { isLoading, error, albums } = useAlbums();

  if (error) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-red-500 font-semibold">{error}</h2>
      </div>
    );
  }

  if (isLoading || albums === null) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-green-500 font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-semibold text-gray-900">ReactQuery</h2>
      <div className="text-left">
        <ul className="space-y-2">
          {albums.map((album) => (
            <li key={album.id} className="pl-4 pb-1 border-b border-gray-500 text-sm">
              {String(album.id).padStart(3, '0')}. {album.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReactQuery;
