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

const roundBikeWalkResults = (number) => {
  return Math.round(number * 100) / 100;
};

export const getJourneyDistance = ({
  roundTrip,
  distance,
  journeyType,
  frequencyCount,
  frequencyPeriod,
}) => {
  // převod vzdálenosti na float:
  distance = parseFloat(distance);

  // validace zadané vzdálenosti:
  if (distance < 0) {
    return (
      <>
        <div>
          {' '}
          Výsledky se po cestě někde zatoulaly.
          <Nav href="/">Zadat novou trasu</Nav>
        </div>
      </>
    );
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
  return distance;
};

// userData + journeyDistance:
export const getResults = (
  {
    fuel,
    peopleCount,
    roundTrip,
    transportType,
    journeyType,
    frequencyPeriod,
    frequencyCount,
  },
  journeyDistance,
) => {
  let results = {};

  peopleCount = parseInt(peopleCount);

  // výsledky podle jednotlivých dopravních prostředků:
  if (transportType === 'car') {
    results = carResults({ journeyDistance, peopleCount, fuel });
  }

  if (transportType === 'bus') {
    results = busResults({ journeyDistance });
  }

  if (transportType === 'train') {
    results = trainResults({ journeyDistance });
  }

  if (transportType === 'motorbike') {
    results = motorbikeResults({ journeyDistance, peopleCount });
  }

  if (transportType === 'walk') {
    results = walkResults({ journeyDistance });
  }

  if (transportType === 'bike') {
    results = bikeResults({ journeyDistance });
  }

  if (transportType === 'plane') {
    results = planeResults({ journeyDistance });
  }

  if (transportType === 'subway') {
    results = subwayResults({ journeyDistance });
  }

  if (transportType === 'ferry') {
    results = ferryResults({ journeyDistance });
  }

  return results;
};

export const carResults = ({ journeyDistance, peopleCount, fuel }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  // validace zadání počtu osob a min / max počet osob:
  if (!(peopleCount && peopleCount > 0 && peopleCount <= 9)) {
    return;
  }

  const calculatedCarSize = peopleCount <= 7 ? carSize.SMALL : carSize.LARGE;
  emmissions = roundResults(
    (journeyDistance * coefficients[vehicleType.CAR][fuel][calculatedCarSize]) /
      peopleCount,
  );

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const busResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(journeyDistance * coefficients[vehicleType.BUS]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const trainResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(journeyDistance * coefficients[vehicleType.TRAIN]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const motorbikeResults = ({ journeyDistance, peopleCount }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  // validace zadání počtu osob a min / max počet osob:
  if (!(peopleCount && peopleCount > 0 && peopleCount <= 2)) {
    return;
  }

  emmissions = roundResults(
    (journeyDistance * coefficients[vehicleType.MOTORBIKE]) / peopleCount,
  );

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const walkResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundBikeWalkResults(
    journeyDistance * coefficients[vehicleType.WALK],
  );

  tree = roundBikeWalkResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const bikeResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundBikeWalkResults(
    journeyDistance * coefficients[vehicleType.BIKE],
  );

  tree = roundBikeWalkResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const planeResults = ({ journeyDistance, roundTrip }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(journeyDistance * coefficients[vehicleType.PLANE]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const subwayResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(journeyDistance * coefficients[vehicleType.SUBWAY]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};

export const ferryResults = ({ journeyDistance }) => {
  let emmissions;
  let tree;

  const treeAbsorption = 22;

  emmissions = roundResults(journeyDistance * coefficients[vehicleType.FERRY]);

  tree = roundResults(emmissions / treeAbsorption);

  return {
    emmissions,
    tree,
  };
};
