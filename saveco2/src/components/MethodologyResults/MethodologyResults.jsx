import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import './methodologyResults.css';

export const MethodologyResults = () => {
  return (
    <>
      <div className="results__methodology-header">
        <MaterialIcon icon={'info'} size={48} />
        <h3>Jak jsme na to přišli?</h3>
      </div>
      <div className="results__methodology-text">
        <p>
          Počet kilometrů jsme vynásobili příslušným koeficientem podle
          zvoleného dopravního prostředku a v&nbsp;případě auta také typu
          pohonu. U&nbsp;pravidelných cest jsme toto číslo ještě vynásobili
          počtem cest za jeden rok. Pokud vás cestuje více, u&nbsp;auta a
          motorky jsme množství CO
          <sub>2</sub> převedli na jednu osobu, aby bylo možné jednotlivé
          dopravní prostředky mezi sebou porovnávat.
        </p>
      </div>
      <Link to="/methodology">
        <Button className={'btn--center'}>Více k metodice</Button>
      </Link>
    </>
  );
};
