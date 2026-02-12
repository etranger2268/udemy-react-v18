import { useState } from 'react';
import { flushSync } from 'react-dom';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const AutoBatchOther = () => {
  console.log('AutoBatchOther');
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) {
      throw new Error('Users fetch Error');
    }
    const data = (await res.json()) as Todo[];
    setIsLoading(false);
    flushSync(() => {
      setTodos(data);
    });
  };

  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">Automatic Batching確認用（その他）</h2>
      <div>
        <button
          type="button"
          className="py-1 px-3 text-sm font-semibold bg-blue-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
          onClick={handleClick}
        >
          API実行
        </button>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold">isLoading: {isLoading ? 'true' : 'false'}</p>
        <ul className="text-sm font-semibold">
          {Array.isArray(todos) ? (
            todos.map((todo) => (
              <li key="todo.id" className="font-normal text-gray-500">
                {todo.title}
              </li>
            ))
          ) : (
            <li>todoを取得してください</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AutoBatchOther;
