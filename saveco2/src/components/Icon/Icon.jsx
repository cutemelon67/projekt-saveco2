import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import './style.css';

// icon: Name of the Google Material icon: https://fonts.google.com/icons
// Note that size is an optional parameter which is use to set the font size of the icon. Default size is 24px.
// <MaterialIcon icon="account_circle" size={48} />

export const Icon = ({ iconType, name, id, value }) => {
  return (
    <label>
      <input id={id} name="transport-type--img" type="radio" />
      {<MaterialIcon icon={iconType} size={48} />}
    </label>
  );
};
