import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { vehicleInfo, vehicleType } from '../TransportModes/TransportModes';
import './alternative.css';

export const Alternative = () => {
  return (
    <>
      <div className="results__alternatives">
        <h3>Jsi si svojí volbou jistý? Zkus raději jednu z alternativ</h3>
        <h4>Co takhle šlápnout do pedálů?</h4>
        <MaterialIcon
          icon={vehicleInfo[vehicleType.BIKE].icon}
          size={48}
        ></MaterialIcon>
        <p>
          1,5 kg CO<sub>2</sub> na osobu
        </p>
        <p>0,8 měsíců</p>
      </div>
    </>
  );
};
