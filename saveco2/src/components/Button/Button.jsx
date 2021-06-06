import React from 'react';
import './button.css';

const classNames = require('classnames');

export const Button = ({ className, type, children, onClick }) => {
  return (
    <button
      className={classNames(
        'btn',
        /*variant === 'primary' ? 'btn--primary' : 'btn--secondary',*/
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
