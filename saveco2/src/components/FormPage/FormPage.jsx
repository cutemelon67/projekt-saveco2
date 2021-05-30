import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { InputBtn } from '../InputBtn/InputBtn';
import { getResults } from '../getResults/getResults';
import {
  fuelType,
  vehicleType,
  vehicleInfo,
} from '../TransportModes/TransportModes';
import { inputFromTo } from '../InputField/InputField';
import { inputDistance } from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import './formPage.css';

export const FormPage = ({ userData, setUserData }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: React.useMemo(() => {
      return userData;
    }, [userData]),
  });

  const watchAllFields = watch();
  const watchedFrom = watch('from');
  const watchedTo = watch('to');

  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${watchedFrom}&destinations=${watchedTo}&key=MY_API_KEY`;

  useEffect(() => {
    const delayedWatch = setTimeout(() => {
      if (watchedFrom.length >= 2 && watchedTo.length >= 2) {
        fetch(proxyurl + URL)
          .then((response) => response.json())
          .then((json) => {
            // pokud json.rows neexistuje - nespadne
            const distanceFromGMInMeters =
              json?.rows?.[0]?.elements?.[0]?.distance?.value;
            console.log(json);
            console.log(distanceFromGMInMeters);
            if (!distanceFromGMInMeters) {
              setValue('distance', 0);
            } else {
              const distanceFromGM = parseInt(distanceFromGMInMeters / 1000);
              setValue('distance', distanceFromGM);
              console.log(distanceFromGM);
            }
          });
      } else {
        return;
      }
    }, 3000);

    return () => clearTimeout(delayedWatch);
  }, [watchedFrom, watchedTo]);

  // pro vypisování vzdálenosti a vybraného dopravního prostředku

  const history = useHistory();
  console.log(userData);

  const onSubmit = (data) => {
    setUserData(data);
    history.push('/results');
  };

  useEffect(() => {
    setValue('distance', 100);
    setValue('peopleCount', 1);
    setValue('transportType', 'car');
    setValue('roundTrip', false);
    setValue('fuel', 'PETROL');
  }, []);

  console.log(userData);

  return (
    <Router>
      <div className="starting-page">
        <Header></Header>
        <main>
          <section className="starting-page__name">
            <h1 className="starting-page__name--headline">
              Spočítej si CO<sub>2</sub> stopu tvojí cesty
            </h1>
            <h3 className="starting-page__name--subheadline">
              a zjisti, kolik stromů tvá volba stojí.{' '}
            </h3>
            <Button
              type={'button'}
              variant={'primary'}
              onClick={() => {
                const anchorTarget = document.getElementById('form__heading');
                anchorTarget.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Chci vědět víc
            </Button>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="starting-page__form--journey">
              <h2 id="form__heading">Tvoje cesta</h2>

              <div className="form--from-to">
                <div className="form__buttons">
                  <Button type={'button'} className={'random'}>
                    Jednorázově
                  </Button>
                  <Button type={'button'} className={'regular'}>
                    Pravidelně
                  </Button>
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
                      defaultValue={userData.name}
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
                    defaultValue={userData.name}
                    min={'0'}
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
                name={'roundTrip'}
                id={'form--round-trip'}
                register={register}
                defaultValue={userData.name}
              >
                zpáteční cesta
              </InputBtn>
              <p className="distance-result">Zadaná vzdálenost: 100 km</p>
            </div>
            <div className="starting-page__form--transport-type">
              <h2>Jak se přesuneš?</h2>
              <div className="transport-type--img">
                {Object.entries(vehicleInfo).map(([key, value]) => (
                  <Icon
                    id={key}
                    iconType={value.icon}
                    key={value.text}
                    register={register}
                    defaultChecked={userData.name}
                  />
                ))}
              </div>
              <p className="transport-result">
                Zvolený dopravní prostředek: auto
              </p>
            </div>
            <div className="starting-page__form--fuel">
              <h2>Na co jezdíš?</h2>
              <div className="form--fuel">
                {Object.entries(fuelType).map(([key, fuel]) => {
                  return (
                    <InputBtn
                      type={'radio'}
                      name={'fuel'}
                      id={key}
                      key={key}
                      required={true}
                      register={register}
                      defaultValue={userData.name}
                      className={'form--fuel-radio'}
                    >
                      {fuel}
                    </InputBtn>
                  );
                })}
              </div>
            </div>
            <div className="starting-page__form--people">
              <h2>Počet cestujících</h2>
              <div className="form--people">
                <InputField
                  htmlFor={'people--count'}
                  id={'people--count'}
                  name={'peopleCount'}
                  type={'number'}
                  required={true}
                  register={register}
                  defaultValue={userData.name}
                  min={'1'}
                  max={9}
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
                  Spočítej
                </Button>
                <Button type={'submit'} className={'standard'}>
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
