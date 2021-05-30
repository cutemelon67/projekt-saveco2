import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './methodologyResults.css';

export const MethodologyResults = () => {
  return (
    <>
      <h3>Jak jsme na to přišli?</h3>
      <p>
        Počet kilometrů jsme vynásobili příslušným koeficientem podle zvoleného
        dopravního prostředku a v případě auta také typu pohonu. U pravidelných
        cest jsme toto číslo ještě vynásobili počtem cest za jeden rok. Pokud
        vás cestuje více, u auta a motorky jsme množství CO
        <sub>2</sub> převedli na jednu osobu, aby bylo možné jednotlivé dopravní
        prostředky mezi sebou porovnávat.
      </p>
      <Link to="/methodology">
        <Button className={'btn--center'}>Více k metodice</Button>
      </Link>
    </>
  );
};
