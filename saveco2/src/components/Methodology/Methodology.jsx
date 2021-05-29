import React from 'react';
import './methodology.css';
import { Table } from '../Table/Table';

export const Methodology = (props) => {
  return (
    <>
      <h2 className="methodology__heading">
        Koeficienty použité pro výpočet emisí CO<sub>2</sub>
      </h2>
      <p className="methodology__text">
        Tabulka níže obsahuje přehled koeficientů pro jednotlivé dopravní
        prostředky. U většiny dopravních prostředků používáme průměrný
        koeficient, který zohledňuje mimo jiné stáří dopravních prostředků a
        případě aut a motorek i jejich velikost, objem motoru a třídu vozidel na
        trhu v aktuálním roce (zde 2020). V případě auta a motorky se jedná o
        kilogramy CO<sub>2</sub> na celé vozidlo. U auta se jednotlivé hodnoty
        liší dle typu pohonu a v případě většího počtu spolucestujících jsme
        použili koeficienty pro multivan, který pojme 8 – 9 osob.
      </p>
      <p className="methodology__text">
        U ostatních dopravních prostředků a chůze je uveden koeficient pro tzv.
        osobokilometry (tj. kolik kg CO<sub>2</sub> vyprodukuje 1 osoba za 1
        km).
      </p>
      <p className="methodology__text">
        V případě letadla se koeficient liší pro krátké (short-haul) a dlouhé
        (long-haul) lety. Pro usnadnění zadávání dat ze strany uživatele jsme
        nebrali v potaz třídu, ve které uživatel cestuje, a vycházíme tedy z
        průměrných hodnot. Uvedené koeficienty nezahrnují WTT (= well-to-tank)
        koeficienty spojené s těžbou, rafinací nebo přepravou jednotlivých paliv
        ani CO<sub>2</sub> vyprodukované při výrobě jednotlivých dopravních
        prostředků.
      </p>
      <p className="methodology__text">
        Pro stanovení koeficientu pro chůzi, běh a plavání jsme vycházeli z
        předpokladu Science Focus, na základě kterého průměrný člověk za 24
        hodin vydechne 1 kg CO<sub>2</sub>, což odpovídá přibližně 0,042 kg CO
        <sub>2</sub> za hodinu. Dále jsme předpokládali, že za 1 hodinu člověk v
        průměru:
      </p>
      <ul className="methodology__list">
        <li>ujede 20 km na kole,</li>
        <li>ujde 5 km,</li>
        <li>uplave 1 km.</li>
      </ul>
      <p className="methodology__text">
        Zároveň, aby člověk mohl vykonávat jakoukoliv fyzickou aktivitu (jízdu
        na kole nebo plavání), potřebuje k tomu palivo (jídlo). Na základě
        informace uvedené na stránkách Our Streets MPLS množství CO
        <sub>2</sub> pocházející z jídla činí 16 g na km.
      </p>
      <table className="methodology__table">
        <Table />
      </table>
      <p className="methodology__note">
        * U automobilů s pohonem hybrid a plug-in hybrid elektro byl pro 8 – 9
        osob z důvodu nedostatku dat použit stejný koeficient jako pro vozidla
        určená pro menší počet osob.
      </p>
    </>
  );
};
