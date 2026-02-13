import { Suspense, useState, useTransition } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AlbumList from '@/components/section5/_components/AlbumList';
import Sidebar from '@/components/section5/_components/Sidebar';
import TodoList from '@/components/section5/_components/TodoList';
import type { Tabs } from '@/components/section5/_type/tabs';

const ReactQuery = () => {
  const [tab, setTab] = useState<Tabs>('ALBUM');
  const [_isPending, startTransition] = useTransition();

  const handleClickTab = (tab: Tabs) => startTransition(() => setTab(tab));

  return (
    <div className="flex h-screen">
      <div className="basis-1/6 h-full bg-amber-50 p-6">
        <Sidebar />
      </div>
      <div className="flex-1 h-full bg-green-50 p-6">
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => handleClickTab('ALBUM')}
            className={`py-2 px-4 text-sm font-semibold text-white ${tab === 'ALBUM' ? 'bg-blue-300' : 'bg-blue-500'} rounded-md transition-all duration-300 hover:opacity-75`}
          >
            Album
          </button>
          <button
            type="button"
            onClick={() => handleClickTab('TODO')}
            className={`py-2 px-4 text-sm font-semibold text-white ${tab === 'TODO' ? 'bg-blue-300' : 'bg-blue-500'} rounded-md transition-all duration-300 hover:opacity-75`}
          >
            Todo
          </button>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex-1 min-h-0">
            <ErrorBoundary
              fallback={
                <h2 className="text-red-500 text-center h-screen">
                  {tab === 'ALBUM' ? 'AlbumList' : tab === 'TODO' ? 'TodoList' : 'List'} Error
                </h2>
              }
            >
              <Suspense
                fallback={
                  <h2 className="text-green-500 text-center font-semibold">
                    {tab === 'ALBUM' ? 'AlbumList' : tab === 'TODO' ? 'TodoList' : 'List'}{' '}
                    Loading...
                  </h2>
                }
              >
                {tab === 'ALBUM' && <AlbumList />}
                {tab === 'TODO' && <TodoList />}
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactQuery;
