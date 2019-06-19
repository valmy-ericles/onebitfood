import React, { Fragment } from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Navbar from './components/header';
import ModalRoot from './components/modals';
import Routes from './routes';

const App = () => (
  <Fragment>
    <Navbar />
    <Section>
      <Container>
        <Routes />
      </Container>
    </Section>
    <ModalRoot />
  </Fragment>
);

export default App;
