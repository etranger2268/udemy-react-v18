import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AlbumList from '@/components/section5/_components/AlbumList';
import Sidebar from '@/components/section5/_components/Sidebar';
import TodoList from '@/components/section5/_components/TodoList';

const ReactQuery = () => {
  return (
    <div className="flex h-screen">
      <div className="basis-1/6 h-full bg-amber-50 p-6">
        <Sidebar />
      </div>
      <div className="flex-1 h-full bg-green-50 p-6">
        <div className="flex flex-col h-full">
          <div className="basis-1/2 min-h-0">
            <ErrorBoundary
              fallback={<h2 className="text-red-500 text-center h-screen">AlbumList Error</h2>}
            >
              <Suspense
                fallback={
                  <h2 className="text-green-500 text-center font-semibold">AlbumList Loading...</h2>
                }
              >
                <AlbumList />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="basis-1/2 min-h-0">
            <ErrorBoundary
              fallback={<h2 className="text-red-500 text-center h-screen">TodoList Error</h2>}
            >
              <Suspense
                fallback={
                  <h2 className="text-green-500 text-center font-semibold">TodoList Loading...</h2>
                }
              >
                <TodoList />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactQuery;
