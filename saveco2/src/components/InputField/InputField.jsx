import React from 'react';
import './inputField.css';

export const InputField = ({ type, name, id, value, children }) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} name={name} type={type} value={value} />
    </>
  );
};
