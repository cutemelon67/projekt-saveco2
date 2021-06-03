import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import {
  carResults,
  busResults,
  trainResults,
  motorbikeResults,
  walkResults,
  bikeResults,
  planeResults,
  subwayResults,
  ferryResults,
} from '../getResults/getResults';
import { getResults } from '../getResults/getResults';
import treeIcon from './img/saveco2-tree-icon.svg';
import './alternatives.css';

export const Alternatives = ({ userData, journeyDistance }) => {
  let alternativeTransport = [];
  console.log(userData);
  if (userData.transportType === 'car') {
    alternativeTransport = getCarAlternatives(userData, journeyDistance);
    console.log(alternativeTransport);
  }

  return (
    <>
      {alternativeTransport.map((transport, index) => {
        return (
          <React.Fragment key={index}>
            <h4>{transport.text}</h4>
            <div className="results__alternative-transport">
              <MaterialIcon icon={transport.icon} size={48}></MaterialIcon>
              <div className="alternative-transport__graph">
                <div className="alternative-transport__graph--bar"></div>
                <img src={treeIcon} alt="tree" />
              </div>

              <div className="alternative-transport__details">
                <p>
                  {transport.result.emmissions} kg CO<sub>2</sub> na osobu
                </p>
                <p>{transport.result.tree} měsíc(e/ů)</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export const getCarAlternatives = (
  { distance, peopleCount, fuel },
  journeyDistance,
) => {
  const alternatives = [];
  // const headerType = [];

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
  // return { alternatives, headerType };
  return alternatives;
};

const getAlternativeResults = ({ journeyDistance, peopleCount, fuel }) => {
  return {
    walk: {
      text: 'Máme lepší nápad! Pohyb na čerstvém vzduchu je zdravý.',
      icon: 'directions_walk',
      result: walkResults({ journeyDistance }),
    },
    bike: {
      text: 'Co takhle šlápnout do pedálů?',
      icon: 'pedal_bike',
      result: bikeResults({ journeyDistance }),
    },
    train: {
      text: 'Vlak je lepší volba. A během cesty můžeš vyřídit maily.',
      icon: 'train',
      result: trainResults({ journeyDistance }),
    },
    trainPlane: {
      text: 'Zjisti si na nádraží, jestli ti nejede vlak. Třeba se Matýsek tentokrát nepo...',
      icon: 'train',
      result: trainResults({ journeyDistance }),
    },
    bus: {
      text: 'Možná ti jede autobus. Zkontroluj jízdní řády!',
      icon: 'directions_bus',
      result: busResults({ journeyDistance }),
    },
    motorbike: {
      text: 'Máš doma motorku? Tak ji vyvez!',
      icon: 'two_wheeler',
      result: motorbikeResults({ journeyDistance, peopleCount }),
    },
    BEV: {
      text: 'Nestojí ti před domem třeba elektromobil?',
      icon: 'directions_car',
      result: carResults({ journeyDistance, peopleCount, fuel }),
    },
    plugin: {
      text: 'Nebo plug-in hybrid elektro? Alespoň na tebe nebude pršet!',
      icon: 'directions_car',
      result: carResults({ journeyDistance, peopleCount, fuel }),
    },
    plane: {
      text: 'Sedni na letadlo! Budeš tam rychleji a možná nenarazíš na ledovec.',
      icon: 'flight',
      result: planeResults({ journeyDistance }),
    },
  };
};

const CoDrive = () => {
  return (
    <>
      <h4 className="alternative--co-drive">
        Nechceš někoho svézt (nebo svést)? Ve&nbsp;více lidech se lépe jede.
      </h4>
    </>
  );
};

const Tree = () => {
  return (
    <>
      <h4>
        Víš, že se můžeš zapojit do sázení stromů? Vyber si kde na&nbsp;
        <a href="https://www.sazimebudoucnost.cz/">Sázíme budoucnost</a> .{' '}
      </h4>
    </>
  );
};

const Acknowledgement = () => {
  return (
    <>
      <h4>Děkujeme, že pomáháš chránit životní prostředí. </h4>
    </>
  );
};

const Swim = () => {
  return (
    <>
      <h4>To snad přeplaveš, ne?</h4>
    </>
  );
};
