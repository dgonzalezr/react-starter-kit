/** NPM DEPENDENCIES */
import React, { Component } from 'react';
import styled from 'styled-components';
/** ASSETS */
import ReactLogo from 'assets/images/reactjs_logo.svg';

/** Welcome Page */
class Welcome extends Component {
    render() {
        return (
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
    }
}

export { Welcome };

/** Styled Welcome Page Components */
const Container = styled.div`
    text-align: center;
`;

const Header = styled.header`
    background-color: #000;
    padding: 1em 0;
`;

const Logo = styled.img`
    color: #fff;
    height: 96px;
    width: auto;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 1.75rem;
`;

const Intro = styled.p`
    color: #212121;
`;

const Code = styled.code`
    color: #f44336;
    font-size: 1.2rem;
`;
