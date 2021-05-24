import React from 'react';
import { render } from 'react-dom';
import MaterialIcon from 'react-google-material-icons';
import './style.css';

// icon: Name of the Google Material icon: https://fonts.google.com/icons
// Note that size is an optional parameter which is use to set the font size of the icon. Default size is 24px.

const App = () => (
  <div className="container">
    <MaterialIcon icon="account_circle" size={48} />
  </div>
);
render(<App />, document.querySelector('#app'));
