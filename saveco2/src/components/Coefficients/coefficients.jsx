import React from 'react';
import {
  vehicleType,
  fuelType,
  carSize,
  busType,
  flightType,
} from '../TransportModes/TransportModes';

export const coefficients = {
  [vehicleType.CAR]: {
    [fuelType.PETROL]: {
      [carSize.SMALL]: 0.17363,
      [carSize.LARGE]: 0.21881,
    },
    [fuelType.DIESEL]: {
      [carSize.SMALL]: 0.1666,
      [carSize.LARGE]: 0.24527,
    },
    [fuelType.HYBRID]: 0.11433,
    [fuelType.CNG]: {
      [carSize.SMALL]: 0.17424,
      [carSize.LARGE]: 0.24523,
    },
    [fuelType.LPG]: {
      [carSize.SMALL]: 0.19707,
      [carSize.LARGE]: 0.27104,
    },
    [fuelType.BEV]: {
      [carSize.SMALL]: 0.05274,
      [carSize.LARGE]: 0.05497,
    },
    [fuelType.PLUGIN]: 0.09433,
    [fuelType.UNKNOWN]: {
      [carSize.SMALL]: 0.17015,
      [carSize.LARGE]: 0.24441,
    },
  },
  [vehicleType.BUS]: {
    [busType.STANDARD]: 0.10231,
    [busType.HOLIDAY]: 0.02679,
  },
  [vehicleType.TRAIN]: 0.03659,
  [vehicleType.MOTORBIKE]: 0.11115,
  [vehicleType.WALK]: 0.00833,
  [vehicleType.BIKE]: 0.01808,
  [vehicleType.PLANE]: {
    [flightType.SHORTHAUL]: 0.08145,
    [flightType.LONGHAUL]: 0.09994,
  },
  [vehicleType.SUBWAY]: 0.02845,
  [vehicleType.FERRY]: 0.11131,
};
