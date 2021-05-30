import React, { useState } from 'react';
import { render } from 'react-dom';
import { FormPage } from './components/FormPage/FormPage';
import { ResultsPage } from './components/ResultsPage/ResultsPage';
import { MethodologyPage } from './components/MethodologyPage/MethodologyPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './db.js';
import './style.css';

// firebase
// const Trasa = () => {
//   const [from, setFrom] = useState();

//   return <></>;
// };

const App = () => {
  const [result, setResult] = useState({});

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/results" component={ResultsPage}>
            <ResultsPage result={result} setResult={setResult} />
          </Route>
          <Route exact path="/" component={FormPage}>
            <FormPage result={result} setResult={setResult} />
          </Route>
          <Route path="/methodology" component={MethodologyPage}>
            <MethodologyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
