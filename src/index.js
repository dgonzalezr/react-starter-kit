/** NPM DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom';

/** Importing Main APP */
import { App } from './app';

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);

/** Rendering APP */
ReactDOM.render(<App />, document.getElementsByClassName('viewport')[0]);
