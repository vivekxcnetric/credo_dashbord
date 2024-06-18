import React from 'react';

const Button = ({ disabled, onClick, type, children }) => {
 let buttonClasses = 'cursor-pointer py-[9.5px] text-sm font-bold font-inter text-blackampwhite-white rounded-xl overflow-hidden flex items-start justify-start';
  let bgColor = '';
  let hoverColor = '';

  if (type === 'approve') {
    bgColor = 'bg-teal-700';
    hoverColor = 'hover:bg-teal-400';
    buttonClasses += ' pr-[59px] pl-16';
  } else if (type === 'decline') {
    bgColor = 'bg-red-500';
    hoverColor = 'hover:bg-red-300';
    buttonClasses += ' pr-[62px] pl-[67px]';
  }

  // Add cursor-not-allowed class when disabled
  console.log(disabled,type)

  return (
    <button
      className={`${buttonClasses} ${bgColor} text-white ${hoverColor} ${disabled ? 'hover:cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      <b className="relative leading-[21px]">{children}</b>
    </button>
  );

};

export default Button;
