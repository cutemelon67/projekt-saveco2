import React from 'react';
import './dataFacts.css';

export const DataFacts = (props) => {
  return (
    <>
      <h2>Víte, že...</h2>
      <div className="dataFacts__container">
        <h3 className="dataFacts__heading">
          Doprava představuje pětinu celosvětových emisí oxidu uhličitého (CO
          <sub>2</sub>)
        </h3>
        <img
          className="dataFacts__img"
          src=""
          alt="Intersection with a lot of traffic"
        />
        <p className="dataFacts__text">
          Sektor dopravy tvoří přibližně 24 % světových emisí CO<sub>2</sub>.
          Největší podíl na nich má silniční doprava (75 %). 45 % emisí CO
          <sub>2</sub> přitom pochází z automobilů a autobusů, zbylých 29 %
          pochází z nákladních vozidel. Letecká doprava příspívá 12 % a
          železniční doprava tvoří pouze 1 % celovětových emisí.
        </p>
      </div>
      <div className="dataFacts__container">
        <h3 className="dataFacts__heading">Stromy jsou plíce planety</h3>
        <img className="dataFacts__img" src="" alt="Sunshine in the forest" />
        <p className="dataFacts__text">
          Během jednoho roku dospělý strom přijme z atmosféry asi 22 kilogramů
          oxidu uhličitého (CO<sub>2</sub>) a výměnou uvolní kyslík. Odhaduje
          se, že každý rok 1,3 milionu stromů odstraní ze vzduchu více než 2 500
          tun znečišťujících látek. Je tedy pravděpodobné, že bez stromů bychom
          na této planetě vůbec nebyli schopni žít.
        </p>
      </div>
      <div className="dataFacts__container">
        <h3 className="dataFacts__heading">
          Důsledkem globálního oteplování ubývá v oceánech kyslík
        </h3>
        <img className="datesFacts__img" src="" alt="Turtle in the ocean" />
        <p className="dataFacts__text">
          Život téměř všech zvířat v oceánu závisí na dostupnosti kyslíku, který
          se rozpouští jako plyn v mořské vodě. Oceán však již několik
          desetiletí nepřetržitě kyslík ztrácí. Hlavním důvodem je globální
          oteplování, které vede ke snížení rozpustnosti plynů, a tedy i
          kyslíku. Studie ukazují, že tento proces bude pokračovat po staletí, i
          kdyby všechny emise CO<sub>2</sub> byly okamžitě zastaveny.
        </p>
      </div>
    </>
  );
};
