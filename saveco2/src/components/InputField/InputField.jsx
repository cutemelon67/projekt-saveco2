import React from 'react';
import './inputField.css';

export const InputField = ({
  children,
  type,
  name,
  id,
  className,
  register,
  required,
  min,
  max,
}) => {
  return (
    <>
      <label className={className} htmlFor={id}>
        {children}
      </label>
      <input
        {...register(name)}
        type={type}
        id={id}
        required={required}
        min={min}
        max={max}
      />
    </>
  );
};

export const inputFromTo = {
  FROM: {
    htmlFor: 'input--from',
    id: 'input--from',
    name: 'from',
    type: 'text',
    value: 'České Budějovice',
    required: true,
    text: 'Odkud:',
  },
  TO: {
    htmlFor: 'input--to',
    id: 'input--to',
    name: 'to',
    type: 'text',
    value: 'Písek',
    required: true,
    text: 'Kam:',
  },
};

export const inputDistance = {
  htmlFor: 'input--distance',
  id: 'input--distance',
  name: 'distance',
  type: 'number',
  value: 100,
  required: true,
  text: 'Vzdálenost (km):',
};
