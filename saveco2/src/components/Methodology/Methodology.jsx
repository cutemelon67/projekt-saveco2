import React from 'react';
import './methodology.css';
import { Table } from '../Table/Table';

export const Methodology = (props) => {
  return (
    <>
      <p className="methodology__text">
        Tabulka níže obsahuje přehled koeficientů pro jednotlivé dopravní
        prostředky. U&nbsp;většiny dopravních prostředků používáme průměrný
        koeficient, který zohledňuje mimo jiné stáří dopravních prostředků a
        v&nbsp;případě aut a motorek i&nbsp;jejich velikost, objem motoru a
        třídu vozidel na trhu v&nbsp;aktuálním roce (zde 2020). V&nbsp;případě
        auta a motorky se jedná o&nbsp;kilogramy CO<sub>2</sub> na celé vozidlo.
        U&nbsp;auta se jednotlivé hodnoty liší dle typu pohonu a pro případ
        většího počtu spolucestujících jsme použili koeficienty pro multivan,
        který pojme 8&nbsp;–&nbsp;9 osob.
      </p>
      <p className="methodology__text">
        U&nbsp;ostatních dopravních prostředků a chůze je uveden koeficient pro
        tzv. osobokilometry (tj. kolik kg CO<sub>2</sub> vyprodukuje 1 osoba za
        1&nbsp;km).
      </p>
      <p className="methodology__text">
        V&nbsp;případě letadla se jsme použili koeficinet pro dlouhé (long-haul)
        lety. Pro usnadnění zadávání dat ze&nbsp;strany uživatele jsme nebrali
        v&nbsp;potaz třídu, ve&nbsp;které uživatel cestuje, a vycházíme tedy
        z&nbsp;průměrných hodnot.
      </p>
      <p>
        Uvedené koeficienty nezahrnují WTT (= well-to-tank) koeficienty spojené
        s&nbsp;těžbou, rafinací nebo přepravou jednotlivých paliv ani CO
        <sub>2</sub> vyprodukované při výrobě jednotlivých dopravních
        prostředků.
      </p>
      <p className="methodology__text">
        Pro stanovení koeficientu pro chůzi a běh jsme vycházeli
        z&nbsp;předpokladu Science Focus, na základě kterého průměrný člověk za
        24&nbsp;hodin vydechne 1&nbsp;kg CO<sub>2</sub>, což odpovídá přibližně
        0,042&nbsp;kg CO
        <sub>2</sub> za hodinu. Dále jsme předpokládali, že za 1 hodinu člověk
        v&nbsp;průměru:
      </p>
      <ul className="methodology__list">
        <li>ujede 20 km na kole,</li>
        <li>ujde 5 km.</li>
      </ul>
      <p className="methodology__text">
        Zároveň, aby člověk mohl vykonávat jakoukoliv fyzickou aktivitu (jízdu
        na kole), potřebuje k&nbsp;tomu palivo (jídlo). Na základě informace
        uvedené na stránkách Our Streets MPLS množství CO
        <sub>2</sub> pocházející z&nbsp;jídla činí 16&nbsp;g na km.
      </p>
      <table className="methodology__table">
        <Table />
      </table>
      <p className="methodology__note">
        * U&nbsp;automobilů s&nbsp;pohonem hybrid a plug-in hybrid elektro byl
        pro 8&nbsp;–&nbsp;9 osob z&nbsp;důvodu nedostatku dat použit stejný
        koeficient jako pro vozidla určená pro menší počet osob.
      </p>
    </>
  );
};
