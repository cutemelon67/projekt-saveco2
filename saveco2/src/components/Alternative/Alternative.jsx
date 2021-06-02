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
import './alternative.css';

export const Alternatives = (userData) => {
  let alternativeTranport;
  if (userData.tranportType === 'car') {
    alternativeTransport = getCarAlternatives(userData);
  }

  return (
    <>
      {alternativeTranport.map((transport) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};

export const getCarAlternatives = ({
  distance,
  peopleCount,
  fuel,
  journeyType,
}) => {
  const alternatives = [];

  // místo toho distance

  // if (journeyType === 'singleJourney') {
  //   singleJourneyDistance = distance;
  // } else {
  //   if (frequencyPeriod === 'year') {
  //     singleJourneyDistance = distance / frequencyCount;
  //   } else if (frequencyPeriod === 'month') {
  //     singleJourneyDistance = distance / (frequencyCount * 12);
  //   } else {
  //     singleJourneyDistance = distance / (frequencyCount * 52);
  //   }
  // }

  if (
    peopleCount === 1 &&
    (fuel === 'diesel' ||
      fuel === 'petrol' ||
      fuel === 'hybrid' ||
      fuel === 'CNG' ||
      fuel === 'LPG' ||
      fuel === 'other')
  ) {
    if (singleJourneyDistance <= 10) {
      alternatives.push(alternativeTextsResults.walk);
      alternatives.push(alternativeTextsResults.bike);
    }
  } else if (singleJourneyDistance <= 100) {
    alternatives.push(alternativeTextsResults.bike);
    alternatives.push(alternativeTextsResults.train);
    alternatives.push(alternativeTextsResults.bus);
    alternatives.push(alternativeTextsResults.motorbike);
  } else if (singleJourneyDistance <= 200) {
    alternatives.push(alternativeTextsResults.train);
    alternatives.push(alternativeTextsResults.bus);
    alternatives.push(alternativeTextsResults.motorbike);
  } else {
    alternatives.push(alternativeTextsResults.train);
    alternatives.push(alternativeTextsResults.bus);
  }
  return alternatives;
};

const alternativeTextsResults = {
  walk: {
    text: 'Máme lepší nápad! Pohyb na čerstvém vzduchu je zdravý.',
    result: walkResults({ distance }),
  },
  bike: {
    text: 'Co takhle šlápnout do pedálů?',
    result: bikeResults({ distance }),
  },
  train: {
    text: 'Vlak je lepší volba. A během cesty můžeš vyřídit maily.',
    result: trainResults({ distance }),
  },
  trainPlane: {
    text: 'Zjisti si na nádraží, jestli ti nejede vlak. Třeba se Matýsek tentokrát nepo...',
    result: trainResults({ distance }),
  },
  bus: {
    text: 'Možná ti jede autobus. Zkontroluj jízdní řády!',
    result: busResults({ distance }),
  },
  motorbike: {
    text: 'Máš doma motorku? Tak ji vyvez!',
    result: motorbikeResults({ distance, peopleCount }),
  },
  BEV: {
    text: 'Nestojí ti před domem třeba elektromobil?',
    result: carResults({ distance, peopleCount, fuel }),
  },
  plugin: {
    text: 'Nebo plug-in hybrid elektro? Alespoň na tebe nebude pršet!',
    result: carResults({ distance, peopleCount, fuel }),
  },
  plane: {
    text: 'Sedni na letadlo! Budeš tam rychleji a možná nenarazíš na ledovec.',
    result: planeResults({ distance }),
  },
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
