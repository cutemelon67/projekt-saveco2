import React from 'react';
import './formButtons.css';

export const FormButtons = ({ children, register, id }) => {
  return (
    <>
      <input
        {...register('journeyType')}
        type="radio"
        name="journeyType"
        id={id}
        required
        defaultValue={id}
      />
      <label className="form__buttons--journey-type btn--secondary">
        {children}
      </label>
    </>
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
