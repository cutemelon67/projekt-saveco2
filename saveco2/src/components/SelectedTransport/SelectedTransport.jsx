import React from 'react';
import { vehicleInfo, fuelInfo } from '../TransportModes/TransportModes';
import MaterialIcon from 'react-google-material-icons';
import treeIcon from './img/saveco2-tree-icon.svg';
import './selectedTransport.css';

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
          <MaterialIcon
            icon={vehicleInfo[transportType].icon}
            size={48}
          ></MaterialIcon>{' '}
        </div>
        <p>{transportType === 'car' ? fuelInfo[fuel] : ''}</p>
      </div>
      <div className="results__selected-transport--details">
        <div className="results__selected-transport--details-co2">
          <p>
            Svojí {journeyType === 'regularJourney' ? ' pravidelnou ' : ''}{' '}
            cestou na trase&nbsp;
            <strong className="result--nowrap">
              {from && to ? `${from} - ${to}` : `${distance} km`}
              {roundTrip ? ' a zpět' : null}
            </strong>
            &nbsp;vyprodukuješ
          </p>
          <div className="selected-transport__values">
            <p className="values--number">{emmissions}</p>

            <p>
              kg CO<sub>2</sub>
              <br />
              na osobu
            </p>
          </div>
          <div
            style={{
              width: '100%',
              // do CSS
              height: '10px',
              background: 'hsl(86.4, 71.1%, 32.5%)',
            }}
          />
        </div>
        <div className="results__selected-transport--details-tree">
          <p>Kolik stromů za tebe ročně musí dýchat?</p>
          <div className="selected-transport__values">
            <p className="values--number">{tree}</p>
            <img className="material-icons__tree" src={treeIcon} alt="tree" />
          </div>
        </div>
      </div>
    </>
  );
};
