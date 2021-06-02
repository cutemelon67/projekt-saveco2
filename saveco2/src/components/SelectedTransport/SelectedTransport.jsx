import React from 'react';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import MaterialIcon from 'react-google-material-icons';
import treeIcon from './img/saveco2-tree-icon.svg';
import { useForm } from 'react-hook-form';
import { getResults } from '../getResults/getResults';
import './selectedTransport.css';
import { ResultsPage } from '../ResultsPage/ResultsPage';

export const SelectedTransport = ({
  emmissions,
  tree,
  journeyDistance,
  userData,
}) => {
  const { from, to, distance, roundTrip, fuel, transportType, journeyType } =
    userData;

  return (
    <>
      <div className="results__selected-transport--overview">
        <p>Výsledky pro </p>
        <div>
          <MaterialIcon icon={transportType.icon} size={48}></MaterialIcon>{' '}
        </div>
        <p>{fuel}</p>
      </div>
      <div className="results__selected-transport--details">
        <p>
          Svojí {journeyType === 'regularJourney' ? ' pravidelnou ' : ''} cestou
          na trase
          <br />
          <strong>
            {distance ? `${distance} km` : `${from} - ${to}`}
            {roundTrip ? ' a zpět ' : null}
          </strong>
          <br />
          vyprodukuješ
        </p>
        <div className="alternative-transport__graph--bar"></div>
        <div className="selected-transport__values">
          <p className="values--number">{emmissions}</p>
          <p>
            kg CO<sub>2</sub>
            <br />
            na osobu
          </p>
        </div>
        <div className="alternative-transport__graph--bar"></div>

        <p>
          Na absorbci tebou vytvořeného CO
          <sub>2</sub>&nbsp; potřebuje jeden strom
        </p>
        <div className="selected-transport__values">
          <p className="values--number">{tree}</p>
          <p>měsíc(e/ů)</p>
        </div>
        <img className="material-icons__tree" src={treeIcon} alt="tree" />
      </div>
    </>
  );
};
