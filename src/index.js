import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppStateProvider from './state';

// Log Rocket
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

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
import LoginPage from './components/LoginPage/LoginPage';
import MenteesPage from './components/MenteesPage/MenteesPage';
import MentorsPage from './components/MentorsPage/MentorsPage';
import Terms from './components/Terms/Terms';
import Apply from './components/Apply/Apply';
import Dashboard from './components/Dashboard/Dashboard';
import Master from './components/Master/Master';
import Profile from './components/Profile/Profile';
import PublicEvents from './components/PublicEvents/PublicEvents';

require('dotenv').config();

// set up logrocket
if (process.env.REACT_APP_APP_ENV === 'production') {
  LogRocket.init(process.env.REACT_APP_LOGROCKET_KEY, {
    dom: {
      inputSanitizer: true,
      textSanitizer: true,
    },
    network: {
      isEnabled: false,
    },
  });
  setupLogRocketReact(LogRocket);
}

// set up Redux persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// set up Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;
if (process.env.REACT_APP_APP_ENV === 'production') {
  store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, socketMiddleware))
    // applyMiddleware(LogRocket.reduxMiddleware())
  );
} else {
  store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, socketMiddleware))
  );
}
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
              <Route exact path='/events' component={PublicEvents} />
              <Route exact path='/mentees' component={MenteesPage} />
              <Route exact path='/mentors' component={MentorsPage} />
              <Route exact path='/apply' component={Apply} />
              <Route exact path='/terms' component={Terms} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/testing' component={Testing} />

              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/master' component={Master} />
              <Redirect to='/' />
            </Switch>
          </MuiThemeProvider>
        </AppStateProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
