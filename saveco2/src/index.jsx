import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { Icon } from './components/Icon/Icon';
import { InputField } from './components/InputField/InputField';
import { InputBtn } from './components/InputBtn/InputBtn';
import { Nav } from './components/Nav/Nav';
import getResults from './components/Results/getResults';
import MaterialIcon from 'react-google-material-icons';
import {
  fuelType,
  vehicleType,
  vehicleInfo,
} from './components/TransportModes/TransportModes';
import { inputFromTo } from './components/InputField/InputField';
import { Table } from './components/Table/Table';
import './db.js';
import './style.css';
import { SelectedTransport } from './components/SelectedTransport/SelectedTransport';
import { Choice } from './components/Choice/Choice';
import { Alternative } from './components/Alternative/Alternative';
import { MethodologyResults } from './components/MethodologyResults/MethodologyResults';

// firebase
// const Trasa = () => {
//   const [from, setFrom] = useState();

//   return <></>;
// };

const App = () => {
  return (
    <div className="container">
      <div className="starting-page">
        <Header></Header>
        <main>
          <section className="starting-page__name">
            <h1>
              Spočítej si CO<sub>2</sub> stopu tvojí cesty
            </h1>
            <h2 className="starting-page__name--subheadline">
              a zjisti, kolik stromů tvá volba stojí.{' '}
            </h2>
            <Button type={'primary'}>Chci vědět víc</Button>
          </section>
          <form action="">
            <div className="starting-page__form--journey">
              <h3>Tvoje cesta</h3>

              <div className="form--from-to">
                <div className="form__buttons">
                  <Button type={'secondary'}>Jednorázově</Button>
                  <Button type={'secondary'}>Pravidelně</Button>
                </div>
                <div className="form__input">
                  {Object.values(inputFromTo).map((input) => (
                    <InputField
                      htmlFor={input.htmlFor}
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      value={input.value}
                      required={input.required}
                      key={input.id}
                    >
                      {input.text}
                    </InputField>
                  ))}
                </div>
                <p className="form--distance">
                  Chci <a href="#">zadat vzdálenost v km</a>.
                </p>
              </div>
              <InputBtn
                type={'checkbox'}
                name={'round-trip'}
                id={'form--round-trip'}
              >
                zpáteční cesta
              </InputBtn>
              <p className="distance-result">Zadaná vzdálenost: 100 km</p>
            </div>
            <div className="starting-page__form--transport-type">
              <h3>Jak se přesuneš?</h3>
              <div className="transport-type--img">
                {Object.values(vehicleType).map((type) => (
                  <Icon
                    id={vehicleInfo[type].text}
                    iconType={vehicleInfo[type].icon}
                    key={vehicleInfo[type].text}
                  />
                ))}
              </div>
              <p className="transport-result">
                {' '}
                Zvolený dopravní prostředek: auto
              </p>
            </div>
            <div className="starting-page__form--fuel">
              <h3>Na co jezdíš?</h3>
              <div className="form--fuel">
                {/* {Object.values(fuelType).map((fuel) => {
                  <InputBtn
                    type={'radio'}
                    name={'fuel'}
                    id={fuel}
                    key={fuel}
                  ></InputBtn>;
                })} */}
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--petrol'}>
                  benzín
                </InputBtn>
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--diesel'}>
                  diesel
                </InputBtn>
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--hybrid'}>
                  hybrid
                </InputBtn>
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--cng'}>
                  CNG
                </InputBtn>
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--lpg'}>
                  LPG
                </InputBtn>
                <InputBtn
                  type={'radio'}
                  name={'fuel'}
                  id={'fuel--battery-electric-vehicle'}
                >
                  elektromobil
                </InputBtn>
                <InputBtn
                  type={'radio'}
                  name={'fuel'}
                  id={'fuel--plug-in-hybrid-electric-vehicle'}
                >
                  plug-in hybrid elektro
                </InputBtn>
                <InputBtn type={'radio'} name={'fuel'} id={'fuel--unknown'}>
                  nevím / nic z uvedeného
                </InputBtn>
              </div>
            </div>
            <div className="starting-page__form--people">
              <h3>Počet cestujících</h3>
              <div className="form--people">
                <InputField
                  htmlFor={'people--count'}
                  id={'people--count'}
                  name={'people--count'}
                  type={'number'}
                >
                  Kolik vás pojede?
                </InputField>
              </div>
            </div>
            <div className="starting-page__form--buttons">
              <div className="form__buttons">
                <Button type="primary">Spočítej</Button>
                <Button type="primary">Přidej dopravní prostředek</Button>
              </div>
            </div>
          </form>
        </main>
        <Footer></Footer>
      </div>
      <div className="results">
        <Header></Header>
        <Nav>Zadat cestu</Nav>
        <h1 className="results--header">
          Jaká je CO<sub>2</sub> stopa tvojí cesty?
        </h1>
        <div className="results__selected-transport">
          <SelectedTransport />
        </div>
        <div className="results__alternatives">
          <Choice
            text={'Jsi si svojí volbou jistý? Zkus raději jednu z alternativ'}
          ></Choice>
          <Alternative />
        </div>
        <div className="results__buttons">
          <Nav>Upravit trasu</Nav>
          <Button type={'secondary'}>
            Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
          </Button>
        </div>
        <div className="results__methodology">
          <MethodologyResults />
        </div>
        <div className="results__dataFacts">
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
            se, že každý rok 1,3 milionu stromů odstraní ze vzduchu více než 2
            500 tun znečišťujících látek. Je tedy pravděpodobné, že bez stromů
            bychom na této planetě vůbec nebyli schopni žít.
          </p>
        </div>
        <div className="dataFacts__container">
          <h3 className="dataFacts__heading">
            Důsledkem globálního oteplování ubývá v oceánech kyslík
          </h3>
          <img className="datesFacts__img" src="" alt="Turtle in the ocean" />
          <p className="dataFacts__text">
            Život téměř všech zvířat v oceánu závisí na dostupnosti kyslíku,
            který se rozpouští jako plyn v mořské vodě. Oceán však již několik
            desetiletí nepřetržitě kyslík ztrácí. Hlavním důvodem je globální
            oteplování, které vede ke snížení rozpustnosti plynů, a tedy i
            kyslíku. Studie ukazují, že tento proces bude pokračovat po staletí,
            i kdyby všechny emise CO<sub>2</sub> byly okamžitě zastaveny.
          </p>
        </div>
        <Footer></Footer>
      </div>
      <div className="methodology">
        <Header></Header>
        <Nav>Výsledky</Nav>
        <div className="methodology__container">
          <h2 className="methodology__heading">
            Koeficienty použité pro výpočet emisí CO<sub>2</sub>
          </h2>
          <p className="methodology__text">
            Tabulka níže obsahuje přehled koeficientů pro jednotlivé dopravní
            prostředky. U většiny dopravních prostředků používáme průměrný
            koeficient, který zohledňuje mimo jiné stáří dopravních prostředků a
            případě aut a motorek i jejich velikost, objem motoru a třídu
            vozidel na trhu v aktuálním roce (zde 2020). V případě auta a
            motorky se jedná o kilogramy CO<sub>2</sub> na celé vozidlo. U auta
            se jednotlivé hodnoty liší dle typu pohonu a v případě většího počtu
            spolucestujících jsme použili koeficienty pro multivan, který pojme
            8 – 9 osob.
          </p>
          <p className="methodology__text">
            U ostatních dopravních prostředků a chůze je uveden koeficient pro
            tzv. osobokilometry (tj. kolik kg CO<sub>2</sub> vyprodukuje 1 osoba
            za 1 km).
          </p>
          <p className="methodology__text">
            V případě letadla se koeficient liší pro krátké (short-haul) a
            dlouhé (long-haul) lety. Pro usnadnění zadávání dat ze strany
            uživatele jsme nebrali v potaz třídu, ve které uživatel cestuje, a
            vycházíme tedy z průměrných hodnot. Uvedené koeficienty nezahrnují
            WTT (= well-to-tank) koeficienty spojené s těžbou, rafinací nebo
            přepravou jednotlivých paliv ani CO<sub>2</sub> vyprodukované při
            výrobě jednotlivých dopravních prostředků.
          </p>
          <p className="methodology__text">
            Pro stanovení koeficientu pro chůzi, běh a plavání jsme vycházeli z
            předpokladu Science Focus, na základě kterého průměrný člověk za 24
            hodin vydechne 1 kg CO<sub>2</sub>, což odpovídá přibližně 0,042 kg
            CO
            <sub>2</sub> za hodinu. Dále jsme předpokládali, že za 1 hodinu
            člověk v průměru:
          </p>
          <ul className="methodology__list">
            <li>ujede 20 km na kole,</li>
            <li>ujde 5 km,</li>
            <li>uplave 1 km.</li>
          </ul>
          <p className="methodology__text">
            Zároveň, aby člověk mohl vykonávat jakoukoliv fyzickou aktivitu
            (jízdu na kole nebo plavání), potřebuje k tomu palivo (jídlo). Na
            základě informace uvedené na stránkách Our Streets MPLS množství CO
            <sub>2</sub> pocházející z jídla činí 16 g na km.
          </p>
          <table className="methodology__table">
            <Table />
          </table>
          <p className="methodology__note">
            * U automobilů s pohonem hybrid a plug-in hybrid elektro byl pro 8 –
            9 osob z důvodu nedostatku dat použit stejný koeficient jako pro
            vozidla určená pro menší počet osob.
          </p>
        </div>
        <div className="calculation__container">
          <h2 className="calculation__heading">Výpočet</h2>
          <p className="calculation__text">
            Vzdálenost jsme získali od uživatele buď zadáním místa odjezdu
            (odkud) a příjezdu (kam) nebo uvedením konkrétní vzdálenosti. V
            případě zpáteční cesty jsme tuto vzdálenost vynásobili dvěma.
          </p>
          <ul className="calculation__list">
            <li>
              Auto: (vzdálenost v km * koeficient dle pohonu) / počet
              cestujících
            </li>
            <li>Motorka: (vzdálenost v km * koeficient) / počet cestujících</li>
            <li>
              Autobus / zájezdový autobus: vzdálenost v km * koeficient podle
              druhu autobusu
            </li>
            <li>Vlak: vzdálenost v km * koeficient</li>
            <li>Tramvaj / metro: vzdálenost v km * koeficient</li>
            <li>
              Letadlo (do 3 700 km): vzdálenost v km * koeficient do 3 700 km
            </li>
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
            Pokud uživatel zvolil pravidelnou cestu, vynásobili jsme celkovou
            trasu počtem opakování za určitý časový úsek, a následně jsme tuto
            hodnotu převedli na vzdálenost, kterou uživatel ujede nebo ujde za
            jeden rok:
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
        </div>
        <div className="sources__container">
          <p className="sources__text">
            Koeficienty použité pro výpočet emisí CO<sub>2</sub> pro všechny
            výše uvedené dopravní prostředky (s výjimkou kola, plavání a chůze)
            jsme převzali z dokumentu{' '}
            <a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2020">
              Greenhouse gas reporting: conversion factors 2020
            </a>
            .
          </p>
          <p className="sources__text">
            Množství CO2, které jeden dospělý strom absorbuje za rok:{' '}
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
              Long-term consequences of CO<sub>2</sub> emissions
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
        </div>
        <Button type={'secondary'}>
          Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
        </Button>
        <Footer></Footer>
      </div>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
