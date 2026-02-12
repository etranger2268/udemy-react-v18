import { useEffect } from 'react';

const Section2 = () => {
  console.log('--- Section2 ---');

  useEffect(() => {
    console.log('--- useEffect ---');
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900">Section2</h2>
    </div>
  );
};

export default Section2;
