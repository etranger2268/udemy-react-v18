import { useAlbums } from '@/components/section5/_hook/useAlbums';

const AlbumList = () => {
  const { data: albums } = useAlbums();

  return (
    <div className="flex flex-col h-full gap-3">
      <h2 className="text-2xl font-semibold text-gray-900 shrink-0">AlbumList</h2>
      <div className="flex-1 overflow-y-auto text-left p-2">
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

export default AlbumList;
