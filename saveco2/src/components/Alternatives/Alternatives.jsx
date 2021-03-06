import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import {
  busResults,
  trainResults,
  motorbikeResults,
  walkResults,
  bikeResults,
  planeResults,
} from '../getResults/getResults';
import treeIcon from './img/saveco2-tree-icon.svg';
import './alternatives.css';

export const getAlternativeObject = ({ userData, journeyDistance }) => {
  let alternativeTransport = [];

  console.log(userData);

  // const editedUserData = { ...userData, peopleCount: parseInt(peopleCount) };

  if (userData.transportType === 'car') {
    alternativeTransport = getCarAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'motorbike') {
    alternativeTransport = getMotorbikeAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'bus') {
    alternativeTransport = getBusAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'train') {
    alternativeTransport = getTrainAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'subway') {
    alternativeTransport = getSubwayAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'plane') {
    alternativeTransport = getPlaneAlternatives(userData, journeyDistance);
  }

  if (userData.transportType === 'ferry') {
    alternativeTransport = getFerryAlternatives(userData, journeyDistance);
  }
  return alternativeTransport;
};

export const Alternatives = ({ alternativeTransport, userData }) => {
  console.log(userData);
  return (
    <>
      <GetChoices userData={userData} />
      {alternativeTransport.map((transport, index) => {
        console.log(transport);
        return (
          <React.Fragment key={index}>
            <div className="results__alternative-transport">
              <div className="alternative-transport__container">
                <MaterialIcon icon={transport.icon} size={48}></MaterialIcon>
                <div className="alternative-transport__container-phrase">
                  <h4>{transport.text}</h4>
                  <div className="transport__graph--container">
                    <div
                      className="transport__graph"
                      style={{
                        width: `${transport.result.emmissionsShare * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="alternative-transport__details">
                <p>
                  {transport.result.emmissions} kg CO<sub>2</sub>
                </p>

                <div className="alternative-transport__details-tree">
                  <p>{transport.result.tree}</p>
                  <img
                    className="material-icons__tree"
                    src={treeIcon}
                    alt="tree"
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <GetOtherAlternatives userData={userData} />
      <GetTreeAlternatives userData={userData} />
    </>
  );
};

export const getCarAlternatives = (
  { distance, peopleCount, fuel },
  journeyDistance,
) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    peopleCount,
    fuel,
    distance,
  });

  if (
    peopleCount === 1 &&
    (fuel === 'diesel' ||
      fuel === 'petrol' ||
      fuel === 'hybrid' ||
      fuel === 'CNG' ||
      fuel === 'LPG' ||
      fuel === 'other')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.bus);
      alternatives.push(alternativeResults.motorbike);
    } else if (distance <= 200) {
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.bus);
      alternatives.push(alternativeResults.motorbike);
    } else {
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.bus);
    }
  }

  if (
    peopleCount === 2 &&
    (fuel === 'diesel' ||
      fuel === 'petrol' ||
      fuel === 'hybrid' ||
      fuel === 'CNG' ||
      fuel === 'LPG' ||
      fuel === 'other')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.motorbike);
    } else if (distance <= 200) {
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.motorbike);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  if (
    (peopleCount === 3 || peopleCount === 4) &&
    (fuel === 'diesel' ||
      fuel === 'petrol' ||
      fuel === 'CNG' ||
      fuel === 'other')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  if (peopleCount >= 3 && peopleCount <= 5 && fuel === 'LPG') {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  if (peopleCount === 3 && fuel === 'hybrid') {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  if (
    peopleCount >= 5 &&
    peopleCount <= 9 &&
    (fuel === 'diesel' ||
      fuel === 'petrol' ||
      fuel === 'CNG' ||
      fuel === 'other')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
    }
  }

  if (peopleCount >= 4 && peopleCount <= 6 && fuel === 'hybrid') {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
    }
  }

  if (peopleCount >= 6 && peopleCount <= 9 && fuel === 'LPG') {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
    }
  }

  if (
    (peopleCount >= 3 && peopleCount <= 5 && fuel === 'plugInHybrid') ||
    (peopleCount === 2 && fuel === 'electro')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
    }
  }

  if (
    ((peopleCount === 1 || peopleCount === 2) && fuel === 'plugInHybrid') ||
    (peopleCount === 1 && fuel === 'electro')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  if (
    (peopleCount >= 3 && peopleCount <= 6 && fuel === 'electro') ||
    (peopleCount >= 6 && peopleCount <= 9 && fuel === 'plugInHybrid') ||
    (peopleCount >= 7 && peopleCount <= 9 && fuel === 'hybrid')
  ) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
    }
  }

  return alternatives;
};

export const getMotorbikeAlternatives = (
  { distance, peopleCount },
  journeyDistance,
) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    peopleCount,
    distance,
  });

  if (peopleCount === 1) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.bus);
    } else {
      alternatives.push(alternativeResults.train);
      alternatives.push(alternativeResults.bus);
    }
  }

  if (peopleCount === 2) {
    if (distance <= 10) {
      alternatives.push(alternativeResults.walk);
      alternatives.push(alternativeResults.bike);
    } else if (distance <= 100) {
      alternatives.push(alternativeResults.bike);
      alternatives.push(alternativeResults.train);
    } else {
      alternatives.push(alternativeResults.train);
    }
  }

  return alternatives;
};

export const getBusAlternatives = ({ distance }, journeyDistance) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    distance,
  });

  if (distance <= 10) {
    alternatives.push(alternativeResults.walk);
    alternatives.push(alternativeResults.bike);
  } else if (distance <= 100) {
    alternatives.push(alternativeResults.bike);
    alternatives.push(alternativeResults.train);
  } else {
    alternatives.push(alternativeResults.train);
  }

  return alternatives;
};

export const getTrainAlternatives = ({ distance }, journeyDistance) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    distance,
  });

  if (distance <= 10) {
    alternatives.push(alternativeResults.walk);
    alternatives.push(alternativeResults.bike);
  } else if (distance <= 100) {
    alternatives.push(alternativeResults.bike);
  }

  return alternatives;
};

export const getSubwayAlternatives = ({ distance }, journeyDistance) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    distance,
  });

  if (distance <= 10) {
    alternatives.push(alternativeResults.walk);
    alternatives.push(alternativeResults.bike);
  } else if (distance <= 100) {
    alternatives.push(alternativeResults.bike);
  }

  return alternatives;
};

export const getPlaneAlternatives = ({ distance }, journeyDistance) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    distance,
  });

  alternatives.push(alternativeResults.trainPlane);

  return alternatives;
};

export const getFerryAlternatives = ({ distance }, journeyDistance) => {
  const alternatives = [];

  const alternativeResults = getAlternativeResults({
    journeyDistance,
    distance,
  });

  alternatives.push(alternativeResults.plane);

  return alternatives;
};

const getAlternativeResults = ({ journeyDistance, peopleCount }) => {
  return {
    walk: {
      text: 'M??me lep???? n??pad! Pohyb na ??erstv??m vzduchu je zdrav??.',
      icon: 'directions_walk',
      result: walkResults({ journeyDistance }),
    },
    bike: {
      text: 'Co takhle ??l??pnout do ped??l???',
      icon: 'pedal_bike',
      result: bikeResults({ journeyDistance }),
    },
    train: {
      text: 'Vlak je lep???? volba. Alespo?? b??hem cesty vy????d???? maily.',
      icon: 'train',
      result: trainResults({ journeyDistance }),
    },
    trainPlane: {
      text: 'Zjisti si na n??dra????, jestli ti nejede vlak. T??eba se Mat??sek tentokr??t nepo...',
      icon: 'train',
      result: trainResults({ journeyDistance }),
    },
    bus: {
      text: 'Mo??n?? ti jede autobus. Zkontroluj j??zdn?? ????dy!',
      icon: 'directions_bus',
      result: busResults({ journeyDistance }),
    },
    motorbike: {
      text: 'M???? doma motorku? Tak ji vyvez!',
      icon: 'two_wheeler',
      result: motorbikeResults({ journeyDistance, peopleCount }),
    },
    plane: {
      text: 'Sedni na letadlo! Bude?? tam rychleji a mo??n?? nenaraz???? na ledovec.',
      icon: 'flight',
      result: planeResults({ journeyDistance }),
    },
  };
};

export const GetOtherAlternatives = ({
  userData: { distance, peopleCount, transportType, fuel },
}) => {
  if (transportType === 'car' && peopleCount <= 2) {
    return (
      <>
        <div className="alternative--others">
          <MaterialIcon icon={'person_add'} size={48}></MaterialIcon>
          <h4>
            {' '}
            Co t??eba n??koho sv??zt (nebo sv??st)? Ve&nbsp;v??ce lidech se l??pe
            jede.
          </h4>
        </div>
      </>
    );
  }

  if (transportType === 'ferry') {
    return (
      <>
        <div className="alternative--others">
          <MaterialIcon icon={'pool'} size={48}></MaterialIcon>
          <h4>To snad p??eplave??, ne?</h4>
        </div>
      </>
    );
  }

  if (
    (transportType === 'car' &&
      fuel === 'electro' &&
      peopleCount >= 7 &&
      peopleCount <= 9) ||
    (transportType === 'train' && distance > 100) ||
    transportType === 'bike' ||
    transportType === 'walk'
  ) {
    return (
      <>
        <div className="alternative--others">
          <MaterialIcon icon={'star_rate'} size={48}></MaterialIcon>
          <h4>D??kujeme, ??e pom??h???? chr??nit ??ivotn?? prost??ed??. </h4>
        </div>
      </>
    );
  }
  return null;
};

export const GetTreeAlternatives = ({ userData: { transportType, fuel } }) => {
  if (
    transportType === 'car' ||
    transportType === 'subway' ||
    transportType === 'motorbike' ||
    transportType === 'bus' ||
    transportType === 'plane' ||
    transportType === 'ferry'
  ) {
    return (
      <>
        <div className="alternative--others">
          <MaterialIcon icon={'park'} size={48}></MaterialIcon>
          <h4>
            V????, ??e se m????e?? zapojit do s??zen?? strom??? Vyber si kde na&nbsp;
            <a href="https://www.sazimebudoucnost.cz/">S??z??me budoucnost</a>.
          </h4>
        </div>
      </>
    );
  }
  return null;
};

export const GetChoices = ({
  userData: { distance, peopleCount, fuel, transportType },
}) => {
  let getChoicesText = '';
  if (
    (distance > 100 &&
      ((transportType === 'car' &&
        peopleCount >= 5 &&
        peopleCount <= 9 &&
        (fuel === 'diesel' ||
          fuel === 'petrol' ||
          fuel === 'CNG' ||
          fuel === 'other')) ||
        (peopleCount >= 4 && peopleCount <= 6 && fuel === 'hybrid') ||
        (peopleCount >= 6 && peopleCount <= 9 && fuel === 'LPG') ||
        (peopleCount >= 3 && peopleCount <= 5 && fuel === 'plugInHybrid'))) ||
    (distance > 100 && transportType === 'subway')
  ) {
    getChoicesText = <>Lep???? volba n??s nenapad??, i&nbsp;kdy?????</>;
  } else if (
    (distance > 10 &&
      transportType === 'car' &&
      fuel === 'electro' &&
      peopleCount >= 3 &&
      peopleCount <= 6) ||
    (distance > 10 &&
      fuel === 'plugInHybrid' &&
      peopleCount >= 6 &&
      peopleCount <= 9) ||
    (distance > 10 && fuel === 'hybrid' && peopleCount >= 7 && peopleCount <= 9)
  ) {
    getChoicesText = <>Lep???? volba n??s nenapad??, i&nbsp;kdy?????</>;
  } else if (
    (fuel === 'electro' && peopleCount >= 7 && peopleCount <= 9) ||
    (transportType === 'train' && distance > 100) ||
    transportType === 'bike' ||
    transportType === 'walk'
  ) {
    getChoicesText = <>Skv??l?? volba!</>;
  } else {
    getChoicesText = (
      <>
        Jsi si svoj?? volbou jist??? <br /> Zkus rad??ji jednu z&nbsp;alternativ!
      </>
    );
  }
  return <h3 className="results__alternatives--choice">{getChoicesText}</h3>;
};
