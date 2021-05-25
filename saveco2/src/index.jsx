import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { Icon } from './components/Icon/Icon';
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
            <h1>Spočítej si CO2 stopu tvojí cesty</h1>
            <h2>a zjisti, kolik stromů tvá volba stojí. </h2>
            <Button>To mě zajímá</Button>
          </section>
          <form action="">
            <div className="starting-page__form--journey">
              <h3>Tvoje cesta</h3>
              <div className="form--from-to">
                <Button>Jednorázově</Button>
                <Button>Pravidelně</Button>
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
                <input
                  type="checkbox"
                  name="round-trip"
                  id="form--round-trip"
                />
                zpáteční cesta
              </label>
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
              <label>
                <input type="radio" name="fuel" id="fuel--petrol" />
                benzín
              </label>
              <label>
                <input type="radio" name="fuel" id="fuel--diesel" />
                diesel
              </label>
              <label>
                <input type="radio" name="fuel" id="fuel--hybrid" />
                hybrid
              </label>
              <label>
                <input type="radio" name="fuel" id="fuel--cng" />
                CNG
              </label>
              <label>
                <input type="radio" name="fuel" id="fuel--lpg" />
                LPG
              </label>
              <label>
                <input
                  type="radio"
                  name="fuel"
                  id="fuel--battery-electric-vehicle"
                />
                elektro
              </label>
              <label>
                <input
                  type="radio"
                  name="pfuel"
                  id="fuel--plug-in-hybrid-electric-vehicle"
                />
                plug-in hybrid elektro
              </label>
              <label>
                <input type="radio" name="fuel" id="fuel--unknown" />
                nevím / nic z uvedeného
              </label>
            </div>
            <div className="form--people">
              <h3>Počet cestujících</h3>
              <label htmlFor="people--count">Kolik vás pojede?</label>
              <input type="number" name="people--count" id="people--count" />
            </div>
            <div className="form__buttons">
              <Button>Spočítej</Button>
              <Button>Přidej dopravní prostředek</Button>
            </div>
          </form>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
