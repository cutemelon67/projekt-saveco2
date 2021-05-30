import React from 'react';
import './transportModes.css';

// const vehicle = {
//   CAR: 'auto',
//   BUS: 'autobus',
//   TRAIN: 'vlak',
//   MOTORBIKE: 'motorka',
//   WALK: 'pěšky',
//   BIKE: 'kolo',
//   PLANE: 'letadlo',
//   TRAM: 'tramvaj/metro',
//   FERRY: 'trajekt',
// };

export const vehicleType = {
  CAR: 'car',
  BUS: 'bus',
  TRAIN: 'train',
  MOTORBIKE: 'motorbike',
  WALK: 'walk',
  BIKE: 'bike',
  PLANE: 'plane',
  SUBWAY: 'subway',
  FERRY: 'ferry',
};

export const fuelType = {
  PETROL: 'petrol',
  DIESEL: 'diesel',
  HYBRID: 'hybrid',
  CNG: 'CNG',
  LPG: 'LPG',
  BEV: 'elektro',
  PLUGIN: 'plugInHybrid',
  UNKNOWN: 'other',
};

export const fuelInfo = {
  [fuelType.PETROL]: 'benzín',
  [fuelType.DIESEL]: 'diesel',
  [fuelType.HYBRID]: 'hybrid',
  [fuelType.CNG]: 'CNG',
  [fuelType.LPG]: 'LPG',
  [fuelType.BEV]: 'elektro',
  [fuelType.PLUGIN]: 'plug in hybrid',
  [fuelType.UNKNOWN]: 'jiné',
};

export const carSize = {
  SMALL: 'small',
  LARGE: 'large',
};

export const busType = {
  STANDARD: 'bus',
  HOLIDAY: 'holidayBus',
};

export const busInfo = {
  [busType.STANDARD]: 'autobus',
  [busType.HOLIDAY]: 'zájezdový autobus',
};

export const flightType = {
  SHORTHAUL: 'shorthaul',
  LONGHAUL: 'longhaul',
};

// zahrnout do komponenty Icon + hlavní jsx
export const vehicleInfo = {
  [vehicleType.CAR]: {
    icon: 'directions_car',
    text: 'auto',
  },
  [vehicleType.BUS]: {
    icon: 'directions_bus',
    text: 'autobus',
  },
  [vehicleType.TRAIN]: {
    icon: 'train',
    text: 'vlak',
  },
  [vehicleType.MOTORBIKE]: {
    icon: 'two_wheeler',
    text: 'motorka',
  },
  [vehicleType.WALK]: {
    icon: 'directions_walk',
    text: 'pěšky',
  },
  [vehicleType.BIKE]: {
    icon: 'pedal_bike',
    text: 'kolo',
  },
  [vehicleType.PLANE]: {
    icon: 'flight',
    text: 'letadlo',
  },
  [vehicleType.SUBWAY]: {
    icon: 'subway',
    text: 'tramvaj/metro',
  },
  [vehicleType.FERRY]: {
    icon: 'directions_boat',
    text: 'trajekt',
  },
};
