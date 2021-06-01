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
  roundTrip,
  transportType,
  journeyType,
  frequencyPeriod,
  frequencyCount,
}) => {
  const results = {};

  // převod vzdálenosti na float:
  distance = parseFloat(distance);

  // validace zadané vzdálenosti:
  if (!(distance && distance > 0)) {
    return;
  }

  // výpočet vzdálenosti v případě zpáteční cesty:
  if (roundTrip !== false) {
    distance = distance * 2;
  }

  // výsledky podle jednotlivých dopravních prostředků:
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
    return planeResults({ distance, roundTrip });
  }

  if (transportType === 'subway') {
    return subwayResults({ distance });
  }

  if (transportType === 'ferry') {
    return ferryResults({ distance });
  }

  console.log(journeyType);

  // jednorázová vs. pravidelná cesta:
  if (journeyType === 'singleJourney') {
    return results;
  } else {
    if (frequencyPeriod === 'year') {
      return results.map((result) => result * frequencyCount);
    } else if (frequencyPeriod === 'month') {
      return results.map((result) => result * frequencyCount * 12);
    } else {
      return results.map((result) => result * frequencyCount * 52);
    }
  }
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

  if (busType === 'bus') {
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

const planeResults = ({ distance, roundTrip }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  const oneWayDistance = roundTrip !== false ? distance / 2 : distance;

  if (distance <= 3700 || oneWayDistance <= 3700) {
    emmissions = roundResults(
      distance * coefficients[vehicleType.PLANE][flightType.SHORTHAUL],
    );
  } else {
    emmissions = roundResults(
      distance * coefficients[vehicleType.PLANE][flightType.LONGHAUL],
    );
  }

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
