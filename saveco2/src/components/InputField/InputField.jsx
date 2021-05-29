import React from 'react';
import './inputField.css';

export const InputField = ({ type, name, id, value, children, className }) => {
  return (
    <>
      <label className={className} htmlFor={id}>
        {children}
      </label>
      <input id={id} name={name} type={type} value={value} />
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
