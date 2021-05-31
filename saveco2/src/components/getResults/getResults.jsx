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

  if (transportType === 'car') {
    return carResults({ distance, peopleCount, fuel });
  }

  if (transportType === 'bus') {
    return busResults({ distance, busType });
  }

  if (transportType === 'train') {
    return trainResults({ distance });
  }

  if (transportType === 'motorbike') {
    return motorbikeResults({ distance, peopleCount });
  }

  if (transportType === 'walk') {
    return walkResults({ distance });
  }

  if (transportType === 'bike') {
    return bikeResults({ distance });
  }

  if (transportType === 'plane') {
    return planeResults({ distance });
  }

  if (transportType === 'subway') {
    return subwayResults({ distance });
  }

  if (transportType === 'ferry') {
    return ferryResults({ distance });
  }

  return results;
};

const carResults = ({ distance, peopleCount, fuel }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

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

const busResults = ({ distance, busType }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  if (busType.STANDARD === 'bus') {
    emmissions = roundResults(
      distance * coefficients[vehicleType.BUS][busType.STANDARD],
    );
  } else {
    emmissions = roundResults(
      distance * coefficients[vehicleType.BUS][busType.HOLIDAY],
    );
  }

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const trainResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.TRAIN]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const motorbikeResults = ({ distance, peopleCount }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  // validace zadání počtu osob a min / max počet osob:
  if (!(peopleCount && peopleCount > 0 && peopleCount <= 2)) {
    return;
  }

  emmissions = roundResults(
    (distance * coefficients[vehicleType.MOTORBIKE]) / peopleCount,
  );

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const walkResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.WALK]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const bikeResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.BIKE]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const planeResults = ({ distance, RoundTrip }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  const oneWayDistance = RoundTrip === false ? distance : distance / 2;
  const distanceCoefficient =
    oneWayDistance <= 3700 ? flightType.SHORTHAUL : flightType.LONGHAUL;
  emmissions = roundResults(
    distance * coefficients[vehicleType.PLANE][distanceCoefficient],
  );

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const subwayResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.SUBWAY]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

const ferryResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.FERRY]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};
