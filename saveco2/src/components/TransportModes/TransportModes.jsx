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

const vehicleType = {
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

// zahrnout do komponenty Icon + hlavní jsx
const vehicleInfo = {
  [vehicleType.CAR]: {
    label: [vehicleType.CAR],
    icon: 'directions_car',
    text: 'auto',
  },
  [vehicleType.BUS]: {
    label: [vehicleType.BUS],
    icon: 'directions_bus',
    text: 'autobus',
  },
  [vehicleType.TRAIN]: {
    label: [vehicleType.TRAIN],
    icon: 'train',
    text: 'vlak',
  },
  [vehicleType.MOTORBIKE]: {
    label: [vehicleType.MOTORBIKE],
    icon: 'two_wheeler',
    text: 'motorka',
  },
  [vehicleType.WALK]: {
    label: [vehicleType.WALK],
    icon: 'directions_walk',
    text: 'pěšky',
  },
  [vehicleType.BIKE]: {
    label: [vehicleType.BIKE],
    icon: 'pedal_bike',
    text: 'kolo',
  },
  [vehicleType.PLANE]: {
    label: [vehicleType.PLANE],
    icon: 'flight',
    text: 'letadlo',
  },
  [vehicleType.SUBWAY]: {
    label: [vehicleType.SUBWAY],
    icon: 'subway',
    text: 'tramvaj/metro',
  },
  [vehicleType.FERRY]: {
    label: [vehicleType.FERRY],
    icon: 'directions_boat',
    text: 'trajekt',
  },
};
