import React from 'react';
import './inputBtn.css';

export const InputBtn = ({ children, type, name, id, className, register }) => {
  return (
    <>
      <label className={className}>
        <input {...register(name)} id={id} type={type} />
        {children}
      </label>
    </>
  );
};
