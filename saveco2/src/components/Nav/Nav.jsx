import React from 'react';
import MaterialIcon from 'react-google-material-icons';

export const Nav = ({ children }) => {
  return (
    <>
      <MaterialIcon icon={'chevron_left'} size={12} />
      <a href="#starting-page">{children}</a>
    </>
  );
};
