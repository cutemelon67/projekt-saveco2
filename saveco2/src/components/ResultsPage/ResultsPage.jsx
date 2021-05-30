import React from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import { getResults } from '../getResults/getResults';
import MaterialIcon from 'react-google-material-icons';
import { SelectedTransport } from '../SelectedTransport/SelectedTransport';
import { Choice } from '../Choice/Choice';
import { Alternative } from '../Alternative/Alternative';
import { MethodologyResults } from '../MethodologyResults/MethodologyResults';
import { DataFacts } from '../DataFacts/DataFacts';
import { useHistory } from 'react-router-dom';
import './resultsPage.css';

export const ResultsPage = ({ userData, setUserData }) => {
  const history = useHistory();

  console.log(userData);
  const calculatedResult = getResults(userData);
  console.log(calculatedResult);

  const onSubmit = (data) => {
    setUserData({});
    history.push('/');
  };

  return (
    <>
      <div className="results">
        <Header></Header>
        <h2 className="results--header">
          Jaká je CO<sub>2</sub> stopa tvojí cesty?
        </h2>
        <Nav href={'/'} onClick={onSubmit}>
          Zadat trasu
        </Nav>
        <div className="results__selected-transport">
          <SelectedTransport />
        </div>
        <div className="results__alternatives">
          <Choice></Choice>
          <Alternative />
        </div>
        <div className="results__buttons">
          <Nav href="/">Upravit trasu</Nav>

          <Button onClick={onSubmit}>
            Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
          </Button>
        </div>
        <div className="results__methodology">
          <MethodologyResults />
        </div>
        <div className="results__data-facts">
          <DataFacts />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
