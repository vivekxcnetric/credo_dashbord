import React from 'react';

const progressBarStyles = 'h-2 rounded-lg';

const ProgressComponent = ({ percentage }) => {
  return (
    <div >
      <span className="text-md font-bold text-teal-400">{percentage}%</span>
      <div className={`relative w-full ${progressBarStyles} bg-zinc-200`}>
        <div className={`absolute top-0 left-0 ${progressBarStyles} bg-teal-400`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};



export default ProgressComponent;
