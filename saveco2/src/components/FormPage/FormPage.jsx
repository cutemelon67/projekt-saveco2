import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon/Icon';
import { InputField } from '../InputField/InputField';
import { InputBtn } from '../InputBtn/InputBtn';
import { InputSelect } from '../InputSelect/InputSelect';
import { getResults } from '../getResults/getResults';
import {
  vehicleType,
  fuelType,
  fuelInfo,
  carSize,
  vehicleInfo,
  vehicle,
} from '../TransportModes/TransportModes';
import { inputFromTo } from '../InputField/InputField';
import { inputDistance } from '../InputField/InputField';
import { FormButtons, journeyTypeButtons } from '../FormButtons/FormButtons';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  ActionLink,
} from 'react-router-dom';
import './formPage.css';

export const FormPage = ({ userData, setUserData }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: React.useMemo(() => {
      return userData;
    }, [userData]),
  });

  const [distanceInput, setDistanceInput] = useState('');

  // const watchAllFields = watch();
  const watchedFrom = watch('from');
  const watchedTo = watch('to');
  let distanceFromGM;
  // const watchedDistanceFromGM = watch(distanceFromGM);

  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${watchedFrom}&destinations=${watchedTo}&key=AIzaSyCEbWgmX72FRhMPfLre0wYnZdWkcqaaKc4`;

  useEffect(() => {
    const delayedWatch = setTimeout(() => {
      if (
        watchedFrom &&
        watchedFrom.length >= 2 &&
        watchedTo &&
        watchedTo.length >= 2
      ) {
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
              distanceFromGM = parseInt(distanceFromGMInMeters / 1000);
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
  const watchedRoundTrip = watch('roundTrip');
  const watchedDistance =
    watchedRoundTrip === false ? watch('distance') : watch('distance') * 2;
  const watchedTransportType = watch('transportType');

  // ukládání a logování dat z formuláře:
  const history = useHistory();
  console.log(userData);

  const onSubmit = (data) => {
    setUserData(data);
    history.push('/results');
  };

  useEffect(() => {
    setValue('distance', 100);
    setValue('transportType', 'car');
    setValue('fuel', 'petrol');
    setValue('peopleCount', 1);
    setValue('frequencyCount', 1);
  }, []);

  return (
    <Router>
      <Header></Header>
      <div className="starting-page">
        <main className="starting-page__main">
          <div className="starting-page__main--container">
            <section className="starting-page__name">
              <h1 className="starting-page__name--headline">
                SPOČÍTEJ SI CO<sub>2</sub> STOPU TVOJÍ CESTY
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
                className={'main'}
              >
                CHCI VĚDĚT VÍC
              </Button>
            </section>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="starting-page__form"
            >
              <div className="starting-page__form--journey">
                <h2 id="form__heading">Tvoje cesta</h2>
                <div className="form--from-to">
                  <div className="form__buttons">
                    {Object.entries(journeyTypeButtons).map(([key, value]) => (
                      <FormButtons
                        id={key}
                        key={value.id}
                        register={register}
                        defaultChecked={userData.id}
                        text={value.text}
                      >
                        {value.text}
                      </FormButtons>
                    ))}
                  </div>
                  <div className="form__input">
                    <div className="input--from-to">
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
                      <p className="form--distance">
                        Chci <Link to="/">zadat vzdálenost v&nbsp;km</Link>.
                      </p>
                    </div>
                    <div className="input--distance">
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
                      Chci <a href="">zadat, odkud a kam pojedu</a>.
                    </p>
                  </div>
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
                <p className="distance-result">
                  {watchedDistance
                    ? `Zadaná vzdálenost: ${watchedDistance} km`
                    : `Zadaná vzdálenost:`}
                  {/* {watchedDistanceFromGM
                    ? `Zadaná vzdálenost: ${userData.distance} km`
                    : `Zadaná vzdálenost:`} */}
                </p>
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
                  Zvolený dopravní prostředek: {[vehicle[watchedTransportType]]}
                </p>
              </div>
              <div className="starting-page__form--fuel">
                <h2>Na co jezdíš?</h2>
                <div className="form--fuel">
                  {Object.values(fuelType).map((fuel) => {
                    return (
                      <InputBtn
                        type={'radio'}
                        name={'fuel'}
                        id={fuel}
                        key={fuel}
                        required={true}
                        register={register}
                        defaultValue={userData.name}
                        className={'form--fuel-radio'}
                      >
                        {fuelInfo[fuel]}
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
                    max={'9'}
                  >
                    Kolik vás pojede?
                  </InputField>
                </div>
              </div>
              <div className="starting-page__form--frequency">
                <h2>Četnost jízd</h2>
                <div className="form--frequency">
                  <p>Jak často se takto přesouváš?</p>
                  <div className="frequency--count-details">
                    <InputField
                      htmlFor={'frequency--count'}
                      id={'frequency--count'}
                      name={'frequencyCount'}
                      type={'number'}
                      required={true}
                      register={register}
                      defaultValue={userData.name}
                      min={'1'}
                    ></InputField>
                    <p>krát</p>
                    <InputSelect
                      register={register}
                      defaultValue={userData.name}
                    ></InputSelect>
                  </div>
                </div>
              </div>
              <div className="starting-page__form--buttons">
                <div className="form__buttons--submit">
                  <Button
                    variant={'primary'}
                    className={'standard'}
                    type={'submit'}
                  >
                    SPOČÍTEJ
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </Router>
  );
};
