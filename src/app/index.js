/** NPM DEPENDENCIES */
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

/** Application global style */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
`;

/** Application Pages */
import { Welcome } from 'app/pages/welcome';

/** Main APP */
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Welcome />
            </React.Fragment>
        );
    }
}

export { App };
