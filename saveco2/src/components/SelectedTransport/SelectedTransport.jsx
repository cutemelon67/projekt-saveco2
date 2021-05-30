import React from 'react';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import MaterialIcon from 'react-google-material-icons';
import './selectedTransport.css';

export const SelectedTransport = () => {
  return (
    <>
      <div className="results__selected-transport--overview">
        <p>Výsledky pro </p>
        <div>
          <MaterialIcon
            icon={vehicleInfo[vehicleType.CAR].icon}
            size={48}
          ></MaterialIcon>{' '}
        </div>
        <p>benzín</p>
      </div>
      <div className="results__selected-transport--details">
        <p>
          Svojí cestou autem na trase
          <br />
          <strong>České Budějovice - Písek a zpět</strong>
          <br />
          vyprodukuješ
        </p>
        <div className="selected-transport__values">
          <p className="values--number">8,7</p>
          <p>
            kg CO<sub>2</sub>
            <br />
            na osobu
          </p>
        </div>

        <p>
          Na absorbci tebou vytvořeného CO
          <sub>2</sub>&nbsp; potřebuje jeden strom
        </p>
        <div className="selected-transport__values">
          <p className="values--number">4,7</p>
          <p>měsíců</p>
        </div>
      </div>
    </>
  );
};
