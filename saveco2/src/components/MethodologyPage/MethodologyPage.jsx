import React from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';
import MaterialIcon from 'react-google-material-icons';
import { Methodology } from '../Methodology/Methodology';
import { Calculation } from '../Calculation/Calculation';
import { Sources } from '../Sources/Sources';
import { Link, useHistory } from 'react-router-dom';
import './methodologyPage.css';

export const MethodologyPage = ({ result, setResult }) => {
  const history = useHistory();

  const onSubmit = (data) => {
    setResult(data);
    history.push('/results');
  };

  return (
    <>
      <div className="methodology">
        <Header></Header>
        <Nav href={'/results'} onClick={onSubmit}>
          Výsledky
        </Nav>
        <div className="methodology__container">
          <Methodology />
        </div>
        <div className="calculation__container">
          <Calculation />
        </div>
        <div className="sources__container">
          <Sources />
        </div>
        <Link to={'/'}>
          <Button>
            Zadej novou trasu <MaterialIcon icon={'chevron_right'} size={12} />
          </Button>
        </Link>

        <Footer></Footer>
      </div>
    </>
  );
};
