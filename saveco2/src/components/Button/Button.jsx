import React from 'react';
import './style.css';

// href doplnit

const classNames = require('classnames');

export const Button = ({ className, type, children }) => {
  return (
    <button
      className={classNames(
        'btn',
        type === 'primary' ? 'btn--primary' : 'btn--secondary',
        className,
      )}
      type="button"
    >
      {children}
    </button>
  );
};
