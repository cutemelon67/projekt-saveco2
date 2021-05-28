import React from 'react';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import MaterialIcon from 'react-google-material-icons';
import './selectedTransport.css';

export const SelectedTransport = () => {
  return (
    <>
      <p>
        Výsledky pro{' '}
        <MaterialIcon
          icon={vehicleInfo[vehicleType.CAR].icon}
          size={48}
        ></MaterialIcon>{' '}
        benzin
      </p>
      <p>
        Svojí cestou autem na trase České Budějovice - Písek a zpět vyprodukuješ
      </p>
      <p>8,7</p>
      <p>
        kg CO<sub>2</sub>
        <br />
        na osobu
      </p>
      <p>
        Kolik času potřebuje jeden strom, aby tebou vytvořené CO<sub>2</sub>
        absorboval?
      </p>
      <p>4,7</p>
      <p>měsíců</p>
    </>
  );
};
