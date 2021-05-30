import React from 'react';
import './inputBtn.css';

export const InputBtn = ({
  children,
  type,
  name,
  id,
  className,
  register,
  required,
}) => {
  return (
    <>
      <label className={className}>
        <input
          {...register(name)}
          id={id}
          type={type}
          required={required}
          defaultValue={id}
        />
        {children}
      </label>
    </>
  );
};
