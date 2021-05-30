import React, { useState } from 'react';
import { coefficients } from '../Coefficients/coefficients';
import {
  vehicleType,
  fuelType,
  fuelInfo,
  carSize,
  busType,
  busInfo,
  flightType,
  vehicleInfo,
} from '../TransportModes/TransportModes';
import './getResults.css';

const roundResults = (number) => {
  return Math.round(number * 10) / 10;
};

export const getResults = ({
  distance,
  fuel,
  peopleCount,
  RoundTrip,
  transportType,
}) => {
  const results = {};
  // převod vzdálenosti na float:
  distance = parseFloat(distance);
  // validace zadané vzdálenosti:
  if (!(distance && distance > 0)) {
    return;
  }

  if (RoundTrip !== false) {
    distance = distance * 2;
  }

  console.log(carResults(100, 1, 'PETROL'));

  return results;
};

const carResults = ({ distance, peopleCount, fuel }) => {
  let emmissions;
  let tree;
  // const [emmissions, setEmmissions] = useState(0);
  // const [tree, setTree] = useState(0);
  const treeAbsorption = 22;
  // převod počtu osob na celé číslo:
  peopleCount = parseInt(peopleCount);
  // validace zadání počtu osob a min / max počet osob:
  if (!(peopleCount && peopleCount > 0 && peopleCount <= 9)) {
    return;
  }

  const calculatedCarSize = peopleCount <= 7 ? carSize.SMALL : carSize.LARGE;
  emmissions = roundResults(
    (distance * coefficients[vehicleType.CAR][fuel][calculatedCarSize]) /
      peopleCount,
  );

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};
