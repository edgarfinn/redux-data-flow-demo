// react se-tup
import React from 'react';
import ReactDOM from 'react-dom';

// custom modules
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// redux set-up
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleWare = applyMiddleware()(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
