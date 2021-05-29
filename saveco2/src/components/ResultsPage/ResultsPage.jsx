import React from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import getResults from '../Results/getResults';
import MaterialIcon from 'react-google-material-icons';
import { SelectedTransport } from '../SelectedTransport/SelectedTransport';
import { Choice } from '../Choice/Choice';
import { Alternative } from '../Alternative/Alternative';
import { MethodologyResults } from '../MethodologyResults/MethodologyResults';
import { DataFacts } from '../DataFacts/DataFacts';
import './resultsPage.css';

export const ResultsPage = (props) => {
  return (
    <>
      <div className="results">
        <Header></Header>
        <h2 className="results--header">
          Jaká je CO<sub>2</sub> stopa tvojí cesty?
        </h2>
        <Nav>Zadat cestu</Nav>
        <div className="results__selected-transport">
          <SelectedTransport />
        </div>
        <div className="results__alternatives">
          <Choice></Choice>
          <Alternative />
        </div>
        <div className="results__buttons">
          <Nav>Upravit trasu</Nav>
          <Button type={'secondary'}>
            Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
          </Button>
        </div>
        <div className="results__methodology">
          <MethodologyResults />
        </div>
        <div className="results__dataFacts">
          <DataFacts />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
