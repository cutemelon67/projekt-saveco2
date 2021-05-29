import React from 'react';
import './inputField.css';

export const InputField = ({
  children,
  type,
  name,
  id,
  className,
  register,
}) => {
  return (
    <>
      <label className={className} htmlFor={id}>
        {children}
      </label>
      <input {...register(name)} type={type} id={id} />
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
    required: false,
    text: 'Odkud:',
  },
  TO: {
    htmlFor: 'input--to',
    id: 'input--to',
    name: 'to',
    type: 'text',
    value: 'Písek',
    required: false,
    text: 'Kam:',
  },
};

export const inputDistance = {
  htmlFor: 'input--distance',
  id: 'input--distance',
  name: 'distance',
  type: 'text',
  value: 100,
  required: false,
  text: 'Vzdálenost (km):',
};
