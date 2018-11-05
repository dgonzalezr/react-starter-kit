/** NPM DEPENDENCIES */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { createGlobalStyle } from 'styled-components';

/** Application global style */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Montserrat,Segoe UI,Roboto,Helvetica Neue,sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
`;

/** Application Pages */
import { Welcome } from 'app/pages/welcome';

/** Flow type definitions */
type Props = {};
type State = {};

/** Main APP */
class App extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Welcome />
            </React.Fragment>
        );
    }
}

/**
 * README: For preserving component states, take a look at:
 * Step 3 (of 3): Adding React Hot Loader to preserve component state
 * http://gaearon.github.io/react-hot-loader/getstarted/
 */
export default hot(module)(App);
