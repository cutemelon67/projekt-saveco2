import React from 'react';
import './style.css';

export const Button = ({ text }) => {
  return (
    <button className="btn" type="button">
      {text}
    </button>
  );
};
