import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Icon } from '../../components/Icon/Icon';
import { InputField } from '../../components/InputField/InputField';
import { InputBtn } from '../../components/InputBtn/InputBtn';
import { InputSelect } from '../../components/InputSelect/InputSelect';
import {
  fuelType,
  fuelInfo,
  vehicleInfo,
  vehicle,
} from '../../components/TransportModes/TransportModes';
import { inputFromTo } from '../../components/InputField/InputField';
import { inputDistance } from '../../components/InputField/InputField';
import { FormButtons, journeyTypeButtons } from '../../components/FormButtons/FormButtons';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import './formPage.css';

export const FormPage = ({ userData, setUserData }) => {
  const defaultData = {
    ...userData,
    journeyType: userData.journeyType || 'singleJourney',
    transportType: userData.transportType || 'car',
    fuel: userData.fuel || 'petrol',
    peopleCount: userData.peopleCount || 1,
  };
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: React.useMemo(() => {
      return defaultData;
    }, [defaultData]),
  });

  const defaultInput =
    getValues('distance') && !getValues('from') && !getValues('to')
      ? inputDistance
      : inputFromTo;
  const [distanceInput, setDistanceInput] = useState(defaultInput);

  const [receivedDistance, setReceivedDistance] = useState(true);

  const watchedFrom = watch('from');
  const watchedTo = watch('to');
  let distanceFromGM;

  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${watchedFrom}&destinations=${watchedTo}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

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
            if (!distanceFromGMInMeters) {
              setValue('distance', 0);
              setReceivedDistance(false);
            } else {
              distanceFromGM = parseInt(distanceFromGMInMeters / 1000);
              setValue('distance', distanceFromGM);
              setReceivedDistance(true);
            }
          });
      } else {
        return;
      }
    }, 1500);

    return () => clearTimeout(delayedWatch);
  }, [watchedFrom, watchedTo]);

  // pro vypisov??n?? vzd??lenosti a vybran??ho dopravn??ho prost??edku
  const watchedRoundTrip = watch('roundTrip');
  const watchedDistance =
    watchedRoundTrip === false ? watch('distance') : watch('distance') * 2;
  const watchedTransportType = watch('transportType');
  const watchedJourneyType = watch('journeyType');

  // ukl??d??n?? a logov??n?? dat z formul????e:
  const history = useHistory();
  console.log(userData);

  const onSubmit = (data) => {
    setUserData(data);
    history.push('/results');
  };

  // p??edvypln??n?? data pro testov??n??:
  // useEffect(() => {
  //   setValue('distance', 100);
  // }, []);

  return (
    <Router>
      <Header></Header>
      <div className="starting-page">
        <main className="starting-page__main">
          <div className="starting-page__main--container">
            <section className="starting-page__name">
              <h1 className="starting-page__name--headline">
                SPO????TEJ SI CO<sub>2</sub> STOPU TVOJ?? CESTY
              </h1>
              <h3 className="starting-page__name--subheadline">
                a zjisti, kolik strom?? tv?? volba stoj??.{' '}
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
                className={'main btn--primary'}
              >
                CHCI V??D??T V??C
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
                    {distanceInput === inputFromTo && (
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
                        {receivedDistance === false ? (
                          <div className="message">
                            Tuto cestu na??e mapy bohu??el neum??. <br /> Zkus
                            zadat vzd??lenost v km.
                          </div>
                        ) : null}
                        <p className="form--distance">
                          Chci{' '}
                          <Link
                            to="/"
                            onClick={() => setDistanceInput(inputDistance)}
                          >
                            zadat vzd??lenost v&nbsp;km
                          </Link>
                          .
                        </p>
                      </div>
                    )}
                    {distanceInput === inputDistance && (
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

                        <p className="form--distance">
                          Chci{' '}
                          <Link
                            to="/"
                            onClick={() => setDistanceInput(inputFromTo)}
                          >
                            zadat, odkud a kam pojedu
                          </Link>
                          .
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <InputBtn
                  type={'checkbox'}
                  name={'roundTrip'}
                  id={'form--round-trip'}
                  register={register}
                  defaultValue={userData.name}
                >
                  zp??te??n?? cesta
                </InputBtn>
                <p className="distance-result">
                  {watchedDistance
                    ? `Zadan?? vzd??lenost: ${watchedDistance} km`
                    : `Zadan?? vzd??lenost:`}
                </p>
              </div>
              <div className="starting-page__form--transport-type">
                <h2>Jak se p??esune???</h2>
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
                  Zvolen?? dopravn?? prost??edek: {[vehicle[watchedTransportType]]}
                </p>
              </div>
              {watchedTransportType === 'car' && (
                <div className="starting-page__form--fuel">
                  <h2>Na co jezd?????</h2>
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
              )}

              {(watchedTransportType === 'car' ||
                watchedTransportType === 'motorbike') && (
                <div className="starting-page__form--people">
                  <h2>Po??et cestuj??c??ch</h2>
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
                      Kolik v??s pojede?
                    </InputField>
                  </div>
                </div>
              )}
              {watchedJourneyType === 'regularJourney' && (
                <div className="starting-page__form--frequency">
                  <h2>??etnost j??zd</h2>
                  <div className="form--frequency">
                    <p>Jak ??asto se takto p??esouv?????</p>
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
                      <p>kr??t</p>
                      <InputSelect
                        register={register}
                        defaultValue={userData.name}
                      ></InputSelect>
                    </div>
                  </div>
                </div>
              )}
              <div className="starting-page__form--buttons">
                <div className="form__buttons--submit">
                  <Button
                    variant={'primary'}
                    className={'standard btn--primary'}
                    type={'submit'}
                  >
                    SPO????TEJ
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
