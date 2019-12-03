import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './assets/fonts/Starjedi.ttf';
import './assets/fonts/anakinmono.ttf';

import App from './components/App/App';
import FetchHandler from "./utils/FetchHandler"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FetchHandler url="https://swapi.co/api/people/?page=" multiple={true}>
    {({isLoading, fetchError, data}) => (
      <App
        isLoading={isLoading}
        fetchError={fetchError}
        data={data}
      />
    )}
  </FetchHandler>,
  document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
