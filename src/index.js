import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleWare} from 'redux'
import rootReducer from './src/redux/reducers'
import {logger} from './src/redux/middleware'

const middleWare = applyMiddleWare(logger)(createStore);

ReactDOM.render(
  <Provider store={middleWare(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
