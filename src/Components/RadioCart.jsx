import React from 'react';

const radioInputClasses = 'mt-1 h-5 w-5 text-teal-700 focus:ring-teal-700 border-teal-300';
const cardClasses = 'p-4 border border-zinc-200 rounded-lg flex items-start space-x-4';
const labelClasses = 'font-medium text-zinc-900';
const textClasses = 'text-zinc-500';

const RadioCard = ({ id, name, label, description, selectedValue, onChange }) => {
  const isChecked = selectedValue === id;

  const handleChange = () => {
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className={cardClasses}>
      <input
        type="radio"
        id={id}
        name={name}
        className={radioInputClasses}
        checked={isChecked}
        onChange={handleChange}
      />
      <div>
        <label htmlFor={id} className={labelClasses}>{label}</label>
        <p className={textClasses}>{description}</p>
      </div>
    </div>
  );
};

export default RadioCard;
