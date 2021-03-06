import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

//It will pass down the store to entire Application via Reducers which is a middle layer
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
