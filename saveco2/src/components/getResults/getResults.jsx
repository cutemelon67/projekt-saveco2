import React, { useState } from 'react';
import { coefficients } from '../Coefficients/coefficients';
import {
  vehicleType,
  fuelType,
  fuelInfo,
  carSize,
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
  let results = {};

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

  // jednorázová vs. pravidelná cesta:
  if (journeyType === 'singleJourney') {
    distance = distance;
  } else {
    if (frequencyPeriod === 'year') {
      distance = distance * frequencyCount;
    } else if (frequencyPeriod === 'month') {
      distance = distance * frequencyCount * 12;
    } else {
      distance = distance * frequencyCount * 52;
    }
  }

  // výsledky podle jednotlivých dopravních prostředků:
  if (transportType === 'car') {
    results = carResults({ distance, peopleCount, fuel });
  }

  if (transportType === 'bus') {
    results = busResults({ distance });
  }

  if (transportType === 'train') {
    results = trainResults({ distance });
  }

  if (transportType === 'motorbike') {
    results = motorbikeResults({ distance, peopleCount });
  }

  if (transportType === 'walk') {
    results = walkResults({ distance });
  }

  if (transportType === 'bike') {
    results = bikeResults({ distance });
  }

  if (transportType === 'plane') {
    results = planeResults({ distance });
  }

  if (transportType === 'subway') {
    results = subwayResults({ distance });
  }

  if (transportType === 'ferry') {
    results = ferryResults({ distance });
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

const busResults = ({ distance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(distance * coefficients[vehicleType.BUS]);

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

  emmissions = roundResults(distance * coefficients[vehicleType.PLANE]);

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
