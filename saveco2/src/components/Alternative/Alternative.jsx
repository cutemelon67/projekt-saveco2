import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
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
