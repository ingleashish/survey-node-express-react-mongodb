import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App'
import reducers from './reducers';

//creating store with dummy reducer which returns the array and intial state object as empty object
//const store = createStore(() => [], {}, applyMiddleware());

const store = createStore(reducers, {}, applyMiddleware());



ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
