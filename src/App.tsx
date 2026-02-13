// import Section2 from '@/components/section2/Section2';
// import AutoBatchEventHandler from '@/components/section3/AutoBatchEventHandler';
// import AutoBatchOther from '@/components/section3/AutoBatchOther';
// import Transition from '@/components/section4/Transition';

import { Suspense } from 'react';
import ReactQuery from '@/components/section5/ReactQuery';

const App = () => {
  return (
    <div className="max-w-lg mx-auto space-y-4">
      {/* --- Section2 --- */}
      {/* <Section2 /> */}

      {/* --- Section3 --- */}
      {/* <AutoBatchEventHandler /> */}
      {/* <AutoBatchOther /> */}

      {/* --- Section4 --- */}
      {/* <Transition /> */}

      {/* --- Section5 --- */}
      <Suspense fallback={<h2 className="text-green-500 text-center font-semibold">Loading...</h2>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
};

export default App;
