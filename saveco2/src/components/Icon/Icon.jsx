import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import './icon.css';

// icon: Name of the Google Material icon: https://fonts.google.com/icons
// Note that size is an optional parameter which is use to set the font size of the icon. Default size is 24px.
// <MaterialIcon icon="account_circle" size={48} />

// export const icons = [
//   { name: 'directions_car' },
//   { name: 'directions_bus' },
//   { name: 'train' },
//   { name: 'two_wheeler' },
//   { name: 'directions_walk' },
//   { name: 'pedal_bike' },
//   { name: 'flight' },
//   { name: 'subway' },
//   { name: 'directions_boat' },
// ];

export const Icon = ({ iconType, id, register }) => {
  return (
    <label className="transport-type--icon">
      <input
        {...register('transportType')}
        id={id}
        type="radio"
        required={true}
        defaultValue={id}
      />
      {<MaterialIcon icon={iconType} size={48} />}
    </label>
  );
};
