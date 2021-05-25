import React from 'react';
import './style.css';

// href doplnit

export const Button = ({ href, children }) => {
  return (
    <button className="btn" type="button">
      {children}
    </button>
  );
};
