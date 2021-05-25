import React from 'react';

export const Input = ({ type, name, id, value, children }) => {
  if (type === 'number' || type === 'text') {
    return (
      <>
        <label htmlFor={id}>{children}</label>
        <input id={id} name={name} type={type} value={value} />
      </>
    );
  } else {
    return (
      <>
        <label>
          <input id={id} name={name} type={type} />
          {children}
        </label>
      </>
    );
  }
};
