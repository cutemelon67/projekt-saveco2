import React from 'react';
import './formButtons.css';

export const FormButtons = ({ register, id, text }) => {
  return (
    <>
      <label className="form__buttons--journey-type">
        <input
          {...register('journeyType')}
          type="radio"
          name="journeyType"
          id={id}
          required={true}
          defaultValue={id}
        />
        {
          <button type="button" className="btn--secondary">
            {text}
          </button>
        }
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
