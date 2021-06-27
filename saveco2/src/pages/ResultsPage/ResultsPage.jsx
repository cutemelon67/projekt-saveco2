import React from 'react';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { getResults } from '../../components/getResults/getResults';
import MaterialIcon from 'react-google-material-icons';
import { SelectedTransport } from '../../components/SelectedTransport/SelectedTransport';
import {
  Alternatives,
  getAlternativeObject,
} from '../../components/Alternatives/Alternatives';
import { MethodologyResults } from '../../components/MethodologyResults/MethodologyResults';
import { DataFacts } from '../../components/DataFacts/DataFacts';
import { useHistory } from 'react-router-dom';
import { getJourneyDistance } from '../../components/getResults/getResults';
import './resultsPage.css';

export const ResultsPage = ({ userData, setUserData }) => {
  const history = useHistory();

  const journeyDistance = getJourneyDistance(userData);

  const { emmissions, tree } = getResults(userData, journeyDistance);
  const alternativeTransport = getAlternativeObject({
    userData,
    journeyDistance,
  });

  alternativeTransport.forEach((item) => {
    item.result.emmissionsShare = item.result.emmissions / emmissions;
  });

  if (emmissions < 0 || tree < 0) {
    return (
      <>
        <div>
          {' '}
          Výsledky se po cestě někde zatoulaly.
          <Nav href="/">Zadat novou trasu</Nav>
        </div>
      </>
    );
  }

  const onSubmit = (data) => {
    setUserData({});
    history.push('/');
  };

  return (
    <>
      <Header></Header>
      <div className="results">
        <h2 className="results--header">
          Jaká je CO<sub>2</sub> stopa tvojí cesty?
        </h2>

        <div className="results__container">
          <Nav href="/">Upravit trasu</Nav>
          <div className="results__selected-transport">
            <SelectedTransport
              emmissions={emmissions}
              tree={tree}
              journeyDistance={journeyDistance}
              userData={userData}
            />
          </div>
          <div className="results__alternatives">
            <Alternatives
              alternativeTransport={alternativeTransport}
              userData={userData}
              journeyDistance={journeyDistance}
            ></Alternatives>
          </div>
          <div className="results__methodology">
            <MethodologyResults />
          </div>
          <div className="results__buttons">
            <Button className={'btn--primary'} onClick={onSubmit}>
              Zadej novou trasu{' '}
              <MaterialIcon icon={'chevron_right'} size={12} />
            </Button>
          </div>
          <div className="results__data-facts">
            <DataFacts />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
