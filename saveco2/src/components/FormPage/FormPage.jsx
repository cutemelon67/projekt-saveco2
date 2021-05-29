import React from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { InputBtn } from '../InputBtn/InputBtn';
import getResults from '../Results/getResults';
import {
  fuelType,
  vehicleType,
  vehicleInfo,
} from '../TransportModes/TransportModes';
import { inputFromTo } from '../InputField/InputField';
import { inputDistance } from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './formPage.css';

export const FormPage = ({ result, setResult }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setResult(data);
  };

  return (
    <Router>
      <div className="starting-page">
        <Header></Header>
        <main>
          <section className="starting-page__name">
            <h1 className="starting-page__name--headline">
              Spočítej si CO<sub>2</sub> stopu tvojí cesty
            </h1>
            <h2 className="starting-page__name--subheadline">
              a zjisti, kolik stromů tvá volba stojí.{' '}
            </h2>
            <Button variant={'primary'}>Chci vědět víc</Button>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="starting-page__form--journey">
              <h3>Tvoje cesta</h3>

              <div className="form--from-to">
                <div className="form__buttons">
                  <Button>Jednorázově</Button>
                  <Button>Pravidelně</Button>
                </div>
                <div className="form__input">
                  {Object.values(inputFromTo).map((input) => (
                    <InputField
                      htmlFor={input.htmlFor}
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      required={input.required}
                      key={input.id}
                      register={register}
                      defaultValue={result.name}
                    >
                      {input.text}
                    </InputField>
                  ))}
                  <InputField
                    htmlFor={inputDistance.htmlFor}
                    id={inputDistance.id}
                    name={inputDistance.name}
                    type={inputDistance.type}
                    required={inputDistance.required}
                    key={inputDistance.id}
                    register={register}
                    defaultValue={result.name}
                  >
                    {inputDistance.text}
                  </InputField>
                </div>
                <p className="form--distance">
                  Chci <a href="#">zadat vzdálenost v km</a>.
                </p>
              </div>
              <InputBtn
                type={'checkbox'}
                name={'round-trip'}
                id={'form--round-trip'}
                register={register}
                defaultValue={result.name}
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
                    className={'transport-type--icon'}
                    register={register}
                    defaultValue={result.name}
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
                {Object.entries(fuelType).map(([key, fuel]) => {
                  return (
                    <InputBtn
                      type={'radio'}
                      name={'fuel'}
                      id={key}
                      key={key}
                      register={register}
                      defaultValue={result.name}
                    >
                      {fuel}
                    </InputBtn>
                  );
                })}
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
                  register={register}
                  defaultValue={result.name}
                >
                  Kolik vás pojede?
                </InputField>
              </div>
            </div>
            <div className="starting-page__form--buttons">
              <div className="form__buttons--submit">
                <Button
                  variant={'primary'}
                  className={'standard'}
                  type={'submit'}
                >
                  <Link to="/results">Spočítej</Link>
                </Button>
                <Button className={'standard'}>
                  Přidej dopravní prostředek
                </Button>
              </div>
            </div>
          </form>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};
