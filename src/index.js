import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppStateProvider from './state';

// History
import history from './store/history';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// Redux Reducer
import rootReducer from './store/reducers/index';

// Redux Middleware
import thunk from 'redux-thunk';
import socketMiddleware from './store/middleware/socketMiddleware';

// Redux Persist
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

// Theme
import { theme } from './theme.js';
import { MuiThemeProvider } from '@material-ui/core';

// Custom Components
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Testing from './components/Testing/Testing';
import FellowshipProgram from './components/FellowshipProgram/FellowshipProgram';

require('dotenv').config();

// set up Redux persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// set up Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware))
  // applyMiddleware(LogRocket.reduxMiddleware())
);
const persistor = persistStore(store);

export { persistor };
export default store;

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router history={history}>
        <AppStateProvider>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about-us' component={About} />
              <Route
                exact
                path='/fellowship-program'
                component={FellowshipProgram}
              />
              <Route exact path='/home' component={Landing} />
              <PrivateRoute exact path='/testing' component={Testing} />
              <Redirect to='/' />
            </Switch>
          </MuiThemeProvider>
        </AppStateProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
