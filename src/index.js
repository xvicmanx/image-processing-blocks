import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  ConnectedRouter,
  routerMiddleware,
} from 'react-router-redux';
import Routes from './Routes';
import reducers from './reducers/CombinedReducers';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/styles_overrides.css';

const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
