import React from 'react';
import { render } from 'react-dom';
import { StartingPage } from './components/StartingPage/StartingPage';
import { ResultsPage } from './components/ResultsPage/ResultsPage';
import { MethodologyPage } from './components/MethodologyPage/MethodologyPage';
import getResults from './components/Results/getResults';
import './db.js';
import './style.css';

// firebase
// const Trasa = () => {
//   const [from, setFrom] = useState();

//   return <></>;
// };

const App = () => {
  return (
    <div className="container">
      <StartingPage />
      <ResultsPage />
      <MethodologyPage />
    </div>
  );
};
render(<App />, document.querySelector('#app'));
