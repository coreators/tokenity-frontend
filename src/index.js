import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor, customHistory } from './modules/store';
import App from './App';

import GlobalFonts from './assets/fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter history={customHistory} >
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
