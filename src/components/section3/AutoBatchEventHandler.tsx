import { useState } from 'react';
import { flushSync } from 'react-dom';

const AutoBatchEventHandler = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  console.log('Automatic Batching確認用（イベントハンドラ）');

  const handleClick = () => {
    console.log(state1);
    flushSync(() => {
      setState1((prev) => prev + 1);
    });
    console.log(state2);
    setState2((prev) => prev + 1);
  };

  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">
        Automatic Batching確認用（イベントハンドラ）
      </h2>
      <div>
        <button
          type="button"
          onClick={handleClick}
          className="py-1 px-3 text-sm font-semibold bg-blue-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
        >
          +1
        </button>
      </div>
      <div className="space-y-1 text-sm font-semibold">
        <p>State1: {state1}</p>
        <p>State2: {state2}</p>
      </div>
    </div>
  );
};

export default AutoBatchEventHandler;
