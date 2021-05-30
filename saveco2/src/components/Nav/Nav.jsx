import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { Link } from 'react-router-dom';
import './nav.css';

export const Nav = ({ children, href, onClick }) => {
  return (
    <div className="nav">
      <MaterialIcon icon={'chevron_left'} size={12} />
      <Link onClick={onClick} to={href}>
        {children}
      </Link>
    </div>
  );
};
