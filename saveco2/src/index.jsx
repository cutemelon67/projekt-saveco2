import React, { useState } from 'react';
import { render } from 'react-dom';
import { FormPage } from './components/FormPage/FormPage';
import { ResultsPage } from './components/ResultsPage/ResultsPage';
import { MethodologyPage } from './components/MethodologyPage/MethodologyPage';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './db.js';
import './style.css';

const App = () => {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <Switch>
          <Route exact path="/results" component={ResultsPage}>
            <ResultsPage userData={userData} setUserData={setUserData} />
          </Route>
          <Route exact path="/" component={FormPage}>
            <FormPage userData={userData} setUserData={setUserData} />
          </Route>
          <Route path="/methodology" component={MethodologyPage}>
            <MethodologyPage setUserData={setUserData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
