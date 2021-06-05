import React from 'react';
import './dataFacts.css';
import imgTraffic from './img/traffic_medium.jpg';
import imgTrees from './img/trees_medium.jpg';
import imgTurtle from './img/turtle_medium.jpg';

export const DataFacts = (props) => {
  return (
    <>
      <h2 className="dataFacts__section-name">VĚDĚLI JSTE, ŽE...</h2>

      <div className="dataFacts__section-name--screen">
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
            Sektor dopravy tvoří přibližně{' '}
            <strong>24&nbsp;% světových emisí </strong>
            oxidu ohličitého (CO<sub>2</sub>). Největší podíl na nich má
            silniční doprava (75&nbsp;%). Z toho 45&nbsp;% emisí CO
            <sub>2</sub> připadá na&nbsp;automobily a&nbsp;autobusy, zbylých
            29&nbsp;% tvoří nákladní doprava. Letecká doprava se podílí
            12&nbsp;% a železniční doprava 1&nbsp;% na&nbsp;celosvětových
            emisích CO<sub>2</sub>.
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
            Během jednoho roku <strong>přijme dospělý strom </strong>
            z&nbsp;atmosféry přibližně <strong>22&nbsp;kilogramů </strong>
            oxidu uhličitého (CO<sub>2</sub>) a výměnou uvolní kyslík. Odhaduje
            se, že každý rok 1,3 milionu stromů odstraní ze&nbsp;vzduchu více
            než 2&nbsp;500 tun znečišťujících látek. Je tedy pravděpodobné, že
            bez stromů bychom na této planetě vůbec nebyli schopni žít.
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
              Důsledkem globálního oteplování ubývá v&nbsp;oceánech kyslík
            </h3>
          </div>
          <p className="dataFacts__text">
            Život téměř všech živočichů v&nbsp;oceánu závisí na dostupnosti
            kyslíku, který se rozpouští jako plyn v&nbsp;mořské vodě. Oceán však
            již několik desetiletí nepřetržitě kyslík ztrácí. Hlavním důvodem je{' '}
            <strong>globální oteplování</strong>, které vede ke&nbsp;snížení
            rozpustnosti plynů, a tedy i&nbsp;kyslíku. Studie ukazují, že tento
            proces bude pokračovat po staletí, i&nbsp;kdyby byly všechny emise
            oxidu ohličitého (CO
            <sub>2</sub>) okamžitě zastaveny.
          </p>
        </div>
      </div>
    </>
  );
};
