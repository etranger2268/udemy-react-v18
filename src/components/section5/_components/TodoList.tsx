import { useTodos } from '@/components/section5/_hook/useTodos';

const TodoList = () => {
  const { data: todos } = useTodos();

  return (
    <div className="flex flex-col h-full gap-3">
      <h2 className="text-2xl font-semibold text-gray-900 shrink-0">TodoList</h2>
      <div className="flex-1 overflow-y-auto text-left p-2">
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="pl-4 flex justify-between pb-1 border-b border-gray-500 text-sm"
            >
              <p>
                {String(todo.id).padStart(3, '0')}. {todo.title}
              </p>
              <p>{todo.completed ? '✓' : '□'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
