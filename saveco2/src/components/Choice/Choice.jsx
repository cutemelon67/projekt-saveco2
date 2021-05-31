import React from 'react';
import './choice.css';

export const ChoiceStandard = () => (
  <h3 className="results__alternatives--choice">
    Jsi si svojí volbou jistý? <br /> Zkus raději jednu z&nbsp;alternativ!
  </h3>
);

export const ChoiceGreat = () => (
  <h3 className="results__alternatives--choice">Skvělá volba!</h3>
);

export const ChoiceMissing = () => (
  <h3 className="results__alternatives--choice">
    Lepší volba nás nenapadá, i&nbsp;když…
  </h3>
);
