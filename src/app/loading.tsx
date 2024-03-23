
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex gap-12 justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-4 border-b-4 rounded-full animate-spin"></div>
      <p className='text-2xl font-bold text-white'>Kalem, sinyal anda lemot</p>
    </div>
  );
};

export default Loading;