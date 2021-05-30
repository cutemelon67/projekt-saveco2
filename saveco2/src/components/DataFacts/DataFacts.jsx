import React from 'react';
import './dataFacts.css';
import imgTraffic from './img/traffic_small.jpg';
import imgTrees from './img/trees_small.jpg';
import imgTurtle from './img/turtle_small.jpg';

export const DataFacts = (props) => {
  return (
    <>
      <h2 className="dataFacts_section-name">Víte, že...</h2>
      <div className="dataFacts__container">
        <div className="container__img">
          <img
            className="dataFacts__img"
            src={imgTraffic}
            alt="Intersection with a lot of traffic"
          />
          <h3 className="dataFacts__heading--text">
            Doprava představuje pětinu celosvětových emisí oxidu uhličitého
          </h3>
        </div>
        <p className="dataFacts__text">
          Sektor dopravy tvoří přibližně <strong>24 % světových emisí </strong>
          oxidu ohličitého (CO<sub>2</sub>) . Největší podíl na nich má silniční
          doprava (75 %). 45 % emisí CO
          <sub>2</sub> pochází přitom z automobilů a autobusů, zbylých 29 %
          tvoří nákladní doprava. Letecká doprava příspívá 12 % a železniční
          doprava tvoří 1 % celovětových emisí.
        </p>
      </div>
      <div className="dataFacts__container">
        <div className="container__img">
          <img
            className="dataFacts__img"
            src={imgTrees}
            alt="Sunshine in the forest"
          />
          <h3 className="dataFacts__heading--text">
            Stromy jsou plíce planety
          </h3>
        </div>
        <p className="dataFacts__text">
          Během jednoho roku <strong>dospělý strom přijme </strong>z atmosféry
          asi <strong>22 kilogramů </strong>
          oxidu uhličitého (CO<sub>2</sub>) a výměnou uvolní kyslík. Odhaduje
          se, že každý rok 1,3 milionu stromů odstraní ze vzduchu více než 2 500
          tun znečišťujících látek. Je tedy pravděpodobné, že bez stromů bychom
          na této planetě vůbec nebyli schopni žít.
        </p>
      </div>
      <div className="dataFacts__container">
        <div className="container__img">
          <img
            className="dataFacts__img"
            src={imgTurtle}
            alt="Turtle in the ocean"
          />
          <h3 className="dataFacts__heading--text">
            Důsledkem globálního oteplování ubývá v oceánech kyslík
          </h3>
        </div>
        <p className="dataFacts__text">
          Život téměř všech zvířat v oceánu závisí na dostupnosti kyslíku, který
          se rozpouští jako plyn v mořské vodě. Oceán však již několik
          desetiletí nepřetržitě kyslík ztrácí. Hlavním důvodem je{' '}
          <strong>globální oteplování</strong>, které vede ke snížení
          rozpustnosti plynů, a tedy i kyslíku. Studie ukazují, že tento proces
          bude pokračovat po staletí, i kdyby všechny emise oxidu ohličitého (CO
          <sub>2</sub>) byly okamžitě zastaveny.
        </p>
      </div>
    </>
  );
};
