import React from 'react';
import './inputBtn.css';

export const InputBtn = ({ type, name, id, value, children }) => {
  return (
    <>
      <label>
        <input id={id} name={name} type={type} />
        {children}
      </label>
    </>
  );
};
