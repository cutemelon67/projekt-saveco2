import React from 'react';
import './calculation.css';

export const Calculation = (props) => {
  return (
    <>
      <h2 className="calculation__heading">Výpočet</h2>
      <p className="calculation__text">
        Vzdálenost jsme získali od uživatele buď zadáním místa odjezdu (odkud)
        a&nbsp;příjezdu (kam) nebo uvedením konkrétní vzdálenosti.
        V&nbsp;případě zpáteční cesty jsme tuto vzdálenost vynásobili dvěma.
      </p>
      <ul className="calculation__list">
        <li>
          Auto: (vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient dle
          pohonu)&nbsp;/&nbsp;počet cestujících
        </li>
        <li>
          Motorka: (vzdálenost
          v&nbsp;km&nbsp;*&nbsp;koeficient)&nbsp;/&nbsp;počet cestujících
        </li>
        <li>
          Autobus / zájezdový autobus: vzdálenost
          v&nbsp;km&nbsp;*&nbsp;koeficient podle druhu autobusu
        </li>
        <li>Vlak: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
        <li>Tramvaj / metro: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
        <li>
          Letadlo (do 3&nbsp;700 km): vzdálenost
          v&nbsp;km&nbsp;*&nbsp;koeficient do 3&nbsp;700 km
        </li>
        <li>
          Letadlo (nad 3&nbsp;700 km): vzdálenost
          v&nbsp;km&nbsp;*&nbsp;koeficient nad 3&nbsp;700 km
        </li>
        <li>Kolo: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
        <li>Plavání: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
        <li>Chůze: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
        <li>Trajekt: vzdálenost v&nbsp;km&nbsp;*&nbsp;koeficient</li>
      </ul>
      <h2 className="calculation__heading">Pravidelná cesta</h2>
      <p className="calculation__text">
        Pokud uživatel zvolil pravidelnou cestu, vynásobili jsme celkovou trasu
        počtem opakování za určitý časový úsek, a&nbsp;následně jsme tuto
        hodnotu převedli na vzdálenost, kterou uživatel ujede nebo ujde za jeden
        rok:
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
          u&nbsp;týdenní frekvence jsme získanou vzdálenost vynásobili číslem 52
        </li>
      </ul>
    </>
  );
};
