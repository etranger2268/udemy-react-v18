import { useState } from 'react';

const AutoBatchEventHandler = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  console.log('Automatic Batching確認用（イベントハンドラ）');

  const handleClick = () => {
    console.log(state1);
    setState1((prev) => prev + 1);
    console.log(state2);
    setState2((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Automatic Batching確認用（イベントハンドラ）</h2>
      <div>
        <button type="button" onClick={handleClick}>
          +1
        </button>
      </div>
      <div>
        <p>State1: {state1}</p>
        <p>State2: {state2}</p>
      </div>
    </div>
  );
};

export default AutoBatchEventHandler;
