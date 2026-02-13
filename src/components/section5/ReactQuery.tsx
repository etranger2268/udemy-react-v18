import { useAlbums } from '@/components/section5/_hook/useAlbums';

const ReactQuery = () => {
  const { data: albums } = useAlbums();

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
