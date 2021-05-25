import React from 'react';
import './style.css';

export const Button = ({ children }) => {
  return (
    <button className="btn" type="button">
      {children}
    </button>
  );
};
