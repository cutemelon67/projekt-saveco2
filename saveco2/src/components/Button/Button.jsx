import React from 'react';
import './style.css';

// href doplnit

const classNames = require('classnames');

export const Button = ({ className, type, variant, children, onClick }) => {
  return (
    <button
      className={classNames(
        'btn',
        variant === 'primary' ? 'btn--primary' : 'btn--secondary',
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
