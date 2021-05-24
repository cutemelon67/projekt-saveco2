import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/index';
import { Button } from './components/Button/index';
import { Footer } from './components/Footer/index';
import { Icon } from './components/Icon/index';
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

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <main>
        <section className="page-name">
          <h1>Spočítej si CO2 stopu tvojí cesty</h1>
          <h2>a zjisti, kolik stromů tvá volba stojí. </h2>
          <Button text={'To mě zajímá'}></Button>
        </section>
        <form action="">
          <div className="form--journey">
            <h3>Tvoje cesta</h3>
            <div className="form--from-to">
              <Button text={'Jednorázově'}></Button>
              <Button text={'Pravidelně'}></Button>
              <label htmlFor="input--from">Odkud: </label>
              <input
                id="input--from"
                name="odkud"
                type="text"
                value="České Budějovice"
                required
              />
              <label htmlFor="input--to">Kam: </label>
              <input
                id="input--to"
                name="kam"
                type="text"
                value="Písek"
                required
              />
              <p className="form--distance">
                Chci <a href="#">zadat vzdálenost v km</a>.
              </p>
            </div>
            <label>
              <input type="checkbox" name="round-trip" id="form--round-trip" />
              zpáteční cesta
            </label>
            <p>Zadaná vzdálenost: 100 km</p>
          </div>
          <div className="form--means-of-transport">
            <h3>Jak se přesuneš?</h3>
            <div className="means-of-transport--img">
              {icons.map((icon) => {
                return <Icon iconType={icon.name} key={icon.name}></Icon>;
              })}
            </div>
            <p>Zvolený dopravní prostředek: auto</p>
          </div>
          <div className="form--fuel">
            <h3>Na co jezdíš?</h3>
            <label>
              <input type="radio" name="petrol" id="fuel--petrol" />
              benzín
            </label>
            <label>
              <input type="radio" name="diesel" id="fuel--diesel" />
              diesel
            </label>
            <label>
              <input type="radio" name="hybrid" id="fuel--hybrid" />
              hybrid
            </label>
            <label>
              <input type="radio" name="cng" id="fuel--cng" />
              CNG
            </label>
            <label>
              <input type="radio" name="lpg" id="fuel--lpg" />
              LPG
            </label>
            <label>
              <input
                type="radio"
                name="battery-electric-vehicle"
                id="fuel--battery-electric-vehicle"
              />
              elektro
            </label>
            <label>
              <input
                type="radio"
                name="plug-in-hybrid-electric-vehicle"
                id="fuel--plug-in-hybrid-electric-vehicle"
              />
              plug-in hybrid elektro
            </label>
            <label>
              <input type="radio" name="unknown" id="fuel--unknown" />
              nevím / nic z uvedeného
            </label>
          </div>
          <div className="form--people">
            <h3>Počet cestujících</h3>
            <label htmlFor="people--count">Kolik vás pojede?</label>
            <input type="number" name="people--count" id="people--count" />
          </div>
          <div className="container__buttons">
            <Button text={'Spočítej'}></Button>
            <Button text={'Přidej dopravní prostředek'}></Button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
