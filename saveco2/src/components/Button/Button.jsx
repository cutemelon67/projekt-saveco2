import React from 'react';
import './style.css';

// href doplnit

export const Button = ({ btnType, children }) => {
  return (
    <button className={`btn ${btnType}`} type="button">
      {children}
    </button>
  );
};
