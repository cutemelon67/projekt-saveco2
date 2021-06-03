import React from 'react';
import './formButtons.css';

export const FormButtons = ({ children, register, id }) => {
  return (
    <label className="form__buttons--journey-type btn--secondary">
      <input
        {...register('journeyType')}
        type="radio"
        name="journeyType"
        id={id}
        required
        defaultValue={id}
      />
      {children}
    </label>
  );
};

export const journeyTypeButtons = {
  singleJourney: {
    id: 'singleJourney',
    text: 'JEDNORÁZOVĚ',
  },
  regularJourney: {
    id: 'regularJourney',
    text: 'PRAVIDELNĚ',
  },
};
