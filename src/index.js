// @flow

/** NPM DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom';

/** Importing Main APP */
import App from './app';

/** Grab the Container Element where the app is going to be rendered */
const AppContainer: ?Element = document.getElementsByClassName('viewport')[0];

if (AppContainer) {
  /** Rendering APP */
  ReactDOM.render(<App />, AppContainer);
}
