import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { Icon } from './components/Icon/Icon';
import { Input } from './components/Input/Input';
import { Nav } from './components/Nav/Nav';
import './db.js';
import './style.css';

const icons = [
  { name: 'directions_car' },
  { name: 'directions_bus' },
  { name: 'train' },
  { name: 'two_wheeler' },
  { name: 'directions_walk' },
  { name: 'pedal_bike' },
  { name: 'flight' },
  { name: 'subway' },
  { name: 'directions_boat' },
];

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
            <h2>a zjisti, kolik stromů tvá volba stojí. </h2>
            <Button>To mě zajímá</Button>
          </section>
          <form action="">
            <div className="starting-page__form--journey">
              <h3>Tvoje cesta</h3>
              <div className="form--from-to">
                <Button>Jednorázově</Button>
                <Button>Pravidelně</Button>
                <Input
                  htmlFor={'input--from'}
                  id={'input--from'}
                  name={'odkud'}
                  type={'text'}
                  value={'České Budějovice'}
                  required
                >
                  Odkud:
                </Input>
                <Input
                  htmlFor={'input--to'}
                  id={'input--to'}
                  name={'kam'}
                  type={'text'}
                  value={'Písek'}
                  required
                >
                  Kam:
                </Input>
                <p className="form--distance">
                  Chci <a href="#">zadat vzdálenost v km</a>.
                </p>
              </div>
              <Input
                type={'checkbox'}
                name={'round-trip'}
                id={'form--round-trip'}
              >
                zpáteční cesta
              </Input>
              <p>Zadaná vzdálenost: 100 km</p>
            </div>
            <div className="form--transport-type">
              <h3>Jak se přesuneš?</h3>
              <div className="transport-type--img">
                {icons.map((icon) => {
                  return <Icon iconType={icon.name} key={icon.name}></Icon>;
                })}
              </div>
              <p>Zvolený dopravní prostředek: auto</p>
            </div>
            <div className="form--fuel">
              <h3>Na co jezdíš?</h3>
              <Input type={'radio'} name={'fuel'} id={'fuel--petrol'}>
                benzín
              </Input>
              <Input type={'radio'} name={'fuel'} id={'fuel--diesel'}>
                diesel
              </Input>
              <Input type={'radio'} name={'fuel'} id={'fuel--hybrid'}>
                hybrid
              </Input>
              <Input type={'radio'} name={'fuel'} id={'fuel--cng'}>
                CNG
              </Input>
              <Input type={'radio'} name={'fuel'} id={'fuel--lpg'}>
                LPG
              </Input>
              <Input
                type={'radio'}
                name={'fuel'}
                id={'fuel--fuel--battery-electric-vehicle'}
              >
                elektro
              </Input>
              <Input
                type={'radio'}
                name={'fuel'}
                id={'fuel--plug-in-hybrid-electric-vehicle'}
              >
                plug-in hybrid elektro
              </Input>
              <Input type={'radio'} name={'fuel'} id={'fuel--unknown'}>
                nevím / nic z uvedeného
              </Input>
            </div>
            <div className="form--people">
              <h3>Počet cestujících</h3>
              <Input
                htmlFor={'people--count'}
                id={'people--count'}
                name={'people--count'}
                type={'number'}
              >
                Kolik vás pojede?
              </Input>
            </div>
            <div className="form__buttons">
              <Button>Spočítej</Button>
              <Button>Přidej dopravní prostředek</Button>
            </div>
          </form>
        </main>
        <Footer></Footer>
      </div>
      <div className="results">
        <Header></Header>
        <Nav>Zadat cestu</Nav>
        <h2>
          Jaká je CO<sub>2</sub> stopa tvojí cesty?
        </h2>
        <div className="results__selected-transport">
          <p>
            Výsledky pro <Icon iconType={icons[0].name}></Icon> benzin
          </p>
          <p>
            Svojí cestou autem na trase České Budějovice - Písek a zpět
            vyprodukuješ
          </p>
          <p>8,7</p>
          <p>
            kg CO<sub>2</sub>
            <br />
            na osobu
          </p>
          <p>
            Kolik času potřebuje jeden strom, aby tebou vytvořené CO<sub>2</sub>
            absorboval?
          </p>
          <p>4,7</p>
          <p>měsíců</p>
        </div>
        <div className="results__alternatives">
          <h3>Jsi si svojí volbou jistý? Zkus raději jednu z alternativ</h3>
          <h4>Co takhle šlápnout do pedálů?</h4>
          <Icon iconType={icons[5].name}></Icon>
          <p>
            1,5 kg CO<sub>2</sub> na osobu
          </p>
          <p>0,8 měsíců</p>
        </div>
        <div className="results__methodology">
          <h3>Jak jsme na to přišli?</h3>
          <p>
            Počet kilometrů jsme vynásobili příslušným koeficientem podle
            zvoleného dopravního prostředku a v případě auta také typu pohonu. U
            pravidelných cest jsme toto číslo ještě vynásobili počtem cest za
            jeden rok. Pokud vás cestuje více, u auta a motorky jsme množství CO
            <sub>2</sub> převedli na 1 osobu, aby bylo možné jednotlivé dopravní
            prostředky mezi sebou porovnávat.
          </p>
          <Button>Více k metodice</Button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
