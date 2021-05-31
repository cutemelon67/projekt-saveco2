import React from 'react';
import './sources.css';

export const Sources = (props) => {
  return (
    <>
      <p className="sources__text">
        Koeficienty použité pro výpočet emisí CO<sub>2</sub> pro všechny výše
        uvedené dopravní prostředky (s&nbsp;výjimkou kola, plavání a chůze) jsme
        převzali z&nbsp;dokumentu{' '}
        <a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2020">
          Greenhouse gas reporting: conversion factors 2020
        </a>
        .
      </p>
      <p className="sources__text">
        Množství CO<sub>2</sub>, které jeden dospělý strom absorbuje za rok:{' '}
        <a href="https://www.eea.europa.eu/articles/forests-health-and-climate-change/key-facts/trees-help-tackle-climate-change">
          European Environment Agency
        </a>
        .
      </p>
      <p className="sources__text">
        Mmnožství CO<sub>2</sub> uvolněného do atmosféry při dýchání:{' '}
        <a href="https://www.sciencefocus.com/planet-earth/how-much-does-human-breathing-contribute-to-climate-change/">
          Science Focus
        </a>
        .
      </p>
      <p className="sources__text">
        Množství CO<sub>2</sub> vyprodukovaného jízdou na kole:{' '}
        <a href="https://www.ourstreetsmpls.org/does_bike_commuting_affect_your_carbon_footprint_and_how_much">
          Our Streets MPLS
        </a>
        .
      </p>
      <h3>Data a fakta</h3>
      <p className="sources__text">
        <a href="https://www.eurekalert.org/pub_releases/2021-04/hcfo-lco041621.php">
          Long-term consequences of&nbsp;CO<sub>2</sub> emissions
        </a>
      </p>
      <p className="sources__text">
        <a href="https://ourworldindata.org/co2-emissions-from-transport#:~:text=Transport%20accounts%20for%20around%20one,CO2%20emissions%20from%20energy%5D.&text=Road%20travel%20accounts%20for%20three,buses%20%E2%80%93%20which%20contribute%2045.1%25.">
          Global CO<sub>2</sub> emissions from transport
        </a>
      </p>
      <p className="sources__text">
        <a href="https://www.eea.europa.eu/articles/forests-health-and-climate-change/key-facts/trees-help-tackle-climate-change#:~:text=Over%20one%20year%20a%20mature,of%20pollutants%20from%20the%20air.">
          Trees help tackle climate change
        </a>
      </p>
    </>
  );
};
