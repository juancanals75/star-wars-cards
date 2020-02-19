import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {ContextProvider} from "./components/Context"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import './assets/fonts/Oswald-variable.ttf';
import './assets/fonts/Starjedi.ttf';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
