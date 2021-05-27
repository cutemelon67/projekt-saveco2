import React from 'react';
import './style.css';

const vehicleType = {
  CAR: 'auto',
  BUS: 'autobus',
  TRAIN: 'vlak',
  MOTORBIKE: 'motorka',
  WALK: 'pěšky',
  BIKE: 'kolo',
  PLANE: 'letadlo',
  TRAM: 'tramvaj/metro',
  FERRY: 'trajekt',
};

const fuelType = {
  PETROL: 'benzín',
  DIESEL: 'diesel',
  HYBRID: 'hybrid',
  CNG: 'CNG',
  LPG: 'LPG',
  BEV: 'elektromobil',
  PLUGIN: 'plug in hybrid elektro',
  UNKNOWN: 'nevím / nic z uvedeného',
};

const carSize = {
  SMALL: 'small',
  LARGE: 'large',
};

const coeficients = {
  [vehicleType.CAR]: {
    [fuelType.PETROL]: {
      [carSize.SMALL]: 0.17363,
      [carSize.LARGE]: 0.21881,
    },
  },
};

const personCount = {
  [vehicleType.CAR]: {
    // počet osob
  },
};

export const getResults = ({
  journeyType,
  distance,
  retour,
  vehicleType,
  fuelType,
  personCount,
  frequency,
}) => {
  return results;
};
