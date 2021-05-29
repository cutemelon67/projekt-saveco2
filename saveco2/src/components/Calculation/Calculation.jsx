import React from 'react';
import './calculation.css';

export const Calculation = (props) => {
  return (
    <>
      <h2 className="calculation__heading">Výpočet</h2>
      <p className="calculation__text">
        Vzdálenost jsme získali od uživatele buď zadáním místa odjezdu (odkud) a
        příjezdu (kam) nebo uvedením konkrétní vzdálenosti. V případě zpáteční
        cesty jsme tuto vzdálenost vynásobili dvěma.
      </p>
      <ul className="calculation__list">
        <li>
          Auto: (vzdálenost v km * koeficient dle pohonu) / počet cestujících
        </li>
        <li>Motorka: (vzdálenost v km * koeficient) / počet cestujících</li>
        <li>
          Autobus / zájezdový autobus: vzdálenost v km * koeficient podle druhu
          autobusu
        </li>
        <li>Vlak: vzdálenost v km * koeficient</li>
        <li>Tramvaj / metro: vzdálenost v km * koeficient</li>
        <li>Letadlo (do 3 700 km): vzdálenost v km * koeficient do 3 700 km</li>
        <li>
          Letadlo (nad 3 700 km): vzdálenost v km * koeficient nad 3 700 km
        </li>
        <li>Kolo: vzdálenost v km * koeficient</li>
        <li>Plavání: vzdálenost v km * koeficient</li>
        <li>Chůze: vzdálenost v km * koeficient</li>
        <li>Trajekt: vzdálenost v km * koeficient</li>
      </ul>
      <h2 className="calculation__heading">Pravidelná cesta</h2>
      <p className="calculation__text">
        Pokud uživatel zvolil pravidelnou cestu, vynásobili jsme celkovou trasu
        počtem opakování za určitý časový úsek, a následně jsme tuto hodnotu
        převedli na vzdálenost, kterou uživatel ujede nebo ujde za jeden rok:
      </p>
      <ul className="calculation__list">
        <li>
          v případě roční frekvence jsme takto získanou vzdálenost rovnou
          použili pro výpočet emisí CO<sub>2</sub>
        </li>
        <li>
          pokud uživatel zvolil variantu „za měsíc“, vynásobili jsme zadanou
          vzdálenost ještě číslem 12
        </li>
        <li>
          u týdenní frekvence jsme získanou vzdálenost vynásobili číslem 52
        </li>
      </ul>
    </>
  );
};
