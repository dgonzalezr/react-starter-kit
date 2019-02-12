// @flow

/** NPM DEPENDENCIES */
import * as React from 'react';
import styled from 'styled-components';
/** ASSETS */
import ReactLogo from 'assets/images/reactjs_logo.svg';

/** Welcome Screen */
const Welcome = () => (
  <Container>
    <Header>
      <Logo src={ReactLogo} />
      <Title>Welcome to React</Title>
    </Header>
    <Intro>
      To get started, edit <br />
      <Code>pages/welcome/Welcome.js</Code> <br />
      and save to reload.
    </Intro>
  </Container>
);

export { Welcome };

/** Styled Components */
const Container: React.ComponentType<{}> = styled.div`
  text-align: center;
`;

const Header: React.ComponentType<{}> = styled.header`
  background-color: #000;
  padding: 1em 0;
`;

const Logo: React.ComponentType<{}> = styled.img`
  color: #fff;
  height: 96px;
  width: auto;
`;

const Title: React.ComponentType<{}> = styled.h1`
  color: #fff;
  font-size: 1.75rem;
`;

const Intro: React.ComponentType<{}> = styled.p`
  color: #212121;
`;

const Code: React.ComponentType<{}> = styled.code`
  color: #f44336;
  font-size: 1.2rem;
`;
