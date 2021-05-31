import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import treeIcon from './img/saveco2-tree-icon.svg';
import './alternative.css';

export const Alternative = () => {
  return (
    <>
      <h4>Co takhle šlápnout do pedálů?</h4>
      <div className="results__alternative-transport">
        <MaterialIcon
          icon={vehicleInfo[vehicleType.BIKE].icon}
          size={48}
        ></MaterialIcon>
        <div className="alternative-transport__graph">
          <div className="alternative-transport__graph--bar"></div>
          <img src={treeIcon} alt="tree" />
        </div>

        <div className="alternative-transport__details">
          <p>
            1,5 kg CO<sub>2</sub> na osobu
          </p>
          <p>0,8 měsíců</p>
        </div>
      </div>
    </>
  );
};

const AlternativeHeadingWalk = () => (
  <h4>Máme lepší nápad! Pohyb na čerstvém vzduchu je zdravý.</h4>
);

const AlternativeHeadingBike = () => <h4>Co takhle šlápnout do pedálů? </h4>;

const AlternativeHeadingTrain = () => (
  <h4>Vlak je lepší volba. A během cesty můžeš vyřídit maily. </h4>
);

const AlternativeHeadingTrainForPlane = () => (
  <h4>
    Zjisti si na nádraží, jestli ti nejede vlak. Třeba se Matýsek tentokrát
    nepo...{' '}
  </h4>
);

const AlternativeHeadingBus = () => (
  <h4>Možná ti jede autobus. Zkontroluj jízdní řády!</h4>
);

const AlternativeHeadingMotorbike = () => (
  <h4>Máš doma motorku? Tak ji vyvez! </h4>
);

const AlternativeHeadingCoDrive = () => (
  <h4>Nechceš někoho svézt (nebo svést)? Ve &nbsp;íce lidech se lépe jede. </h4>
);

const AlternativeHeadingTree = () => (
  <h4>
    Víš, že se můžeš zapojit do sázení stromů? Vyber si kde na&nbsp;
    <a href="https://www.sazimebudoucnost.cz/">Sázíme budoucnost</a> .{' '}
  </h4>
);

const AlternativeHeadingAcknowledgement = () => (
  <h4>Děkujeme, že pomáháš chránit životní prostředí. </h4>
);

const AlternativeHeadingBEV = () => (
  <h4>Nestojí ti v&nbsp;garáži třeba elektromobil? </h4>
);

const AlternativeHeadingPlugin = () => (
  <h4>Nebo plug-in hybrid elektro? Alespoň na tebe nebude pršet! </h4>
);

const AlternativeHeadingHolidayBus = () => (
  <h4>
    Zeptej se v&nbsp;cestovce na autobus a poznej další účastníky zájezdu.{' '}
  </h4>
);

const AlternativeHeadingSwim = () => <h4>To snad přeplaveš, ne?</h4>;

const AlternativeHeadingPlane = () => (
  <h4>Sedni na letadlo! Budeš tam rychleji a možná nenarazíš na ledovec.</h4>
);
