import React from 'react';
import './inputSelect.css';

export const InputSelect = ({ register }) => {
  return (
    <>
      <label>
        <select
          name="frequencyPeriod"
          id="frequency--period"
          {...register('frequencyPeriod')}
          required
        >
          <option value="year">za rok</option>
          <option value="month">za měsíc</option>
          <option value="week">za týden</option>
        </select>
      </label>
    </>
  );
};
