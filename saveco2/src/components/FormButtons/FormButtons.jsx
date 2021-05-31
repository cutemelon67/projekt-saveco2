import React from 'react';
import { Button } from '../Button/Button';
import './formButtons.css';

export const FormButtons = () => {
  return (
    <>
      <label className="form__buttons--journey-type">
        <input
          // {...register('journeyType')}
          type="radio"
          name="journeyType"
          id="single-journey"
          required
        />
        {
          <Button type={'button'} className={'random'}>
            JEDNORÁZOVĚ
          </Button>
        }
      </label>
      <label className="form__buttons--journey-type">
        <input
          // {...register('journeyType')}
          type="radio"
          name="journeyType"
          id="regular-journey"
          required
        />
        {
          <Button type={'button'} className={'regular'}>
            PRAVIDELNĚ
          </Button>
        }
      </label>
    </>
  );
};
