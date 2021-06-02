import React from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import { getResults } from '../getResults/getResults';
import MaterialIcon from 'react-google-material-icons';
import { SelectedTransport } from '../SelectedTransport/SelectedTransport';
import { ChoiceStandard, ChoiceGreat, ChoiceMissing } from '../Choice/Choice';
// import { Alternatives } from '../Alternatives/Alternatives';
import { MethodologyResults } from '../MethodologyResults/MethodologyResults';
import { DataFacts } from '../DataFacts/DataFacts';
import { useHistory } from 'react-router-dom';
import { getJourneyDistance } from '../getResults/getResults';
import './resultsPage.css';

export const ResultsPage = ({ userData, setUserData }) => {
  const history = useHistory();

  const journeyDistance = getJourneyDistance(userData);

  const { emmissions, tree } = getResults(userData, journeyDistance);

  if (!emmissions || !tree) {
    return <p> Výsledky se po cestě někde zatoulaly.</p>;
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
        <Nav href={'/'} onClick={onSubmit}>
          Zadat trasu
        </Nav>
        <div className="results__selected-transport">
          <SelectedTransport
            emmissions={emmissions}
            tree={tree}
            journeyDistance={journeyDistance}
            userData={userData}
          />
        </div>
        <div className="results__alternatives">
          <ChoiceStandard></ChoiceStandard>
          {/* <Alternatives
            userData={userData}
            journeyDistance={journeyDistance}
          ></Alternatives> */}
        </div>
        <div className="results__methodology">
          <MethodologyResults />
        </div>
        <div className="results__buttons">
          <Nav href="/">Upravit trasu</Nav>

          <Button onClick={onSubmit}>
            Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
          </Button>
        </div>
        <div className="results__data-facts">
          <DataFacts />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
