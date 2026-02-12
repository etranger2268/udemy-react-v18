import { useState } from 'react';

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
    setTodos(data);
  };

  return (
    <div>
      <h2>Automatic Batching確認用（その他）</h2>
      <div>
        <button type="button" onClick={handleClick}>
          API実行
        </button>
      </div>
      <div>
        <p>isLoading: {isLoading ? 'true' : 'false'}</p>
        <ul>
          {Array.isArray(todos) ? (
            todos.map((todo) => <li key="todo.id">{todo.title}</li>)
          ) : (
            <li>todoを取得してください</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AutoBatchOther;
