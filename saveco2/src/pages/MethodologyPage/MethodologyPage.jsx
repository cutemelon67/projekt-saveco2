import React from 'react';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import MaterialIcon from 'react-google-material-icons';
import { Methodology } from '../../components/Methodology/Methodology';
import { Calculation } from '../../components/Calculation/Calculation';
import { Sources } from '../../components/Sources/Sources';
import { useHistory } from 'react-router-dom';
import './methodologyPage.css';

export const MethodologyPage = ({ userData, setUserData }) => {
  const history = useHistory();

  const onSubmit = (data) => {
    setUserData({});
    history.push('/');
  };

  return (
    <>
      <Header></Header>
      <div className="methodology">
        <h2 className="methodology__heading">
          Koeficienty použité pro výpočet emisí CO<sub>2</sub>
        </h2>
        <Nav href={'/results'}>Výsledky</Nav>
        <div className="methodology__overview">
          <div className="methodology__container">
            <Methodology />
          </div>

          <div className="calculation__container">
            <Calculation />
          </div>
          <div className="sources__container">
            <Sources />
          </div>
          <div className="methodology__button">
            <Button className={'btn--primary'} onClick={onSubmit}>
              Zadej novou trasu{' '}
              <MaterialIcon icon={'chevron_right'} size={12} />
            </Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
