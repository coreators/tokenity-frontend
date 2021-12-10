import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import rootReducer, { rootSaga } from '..';

const persistConfig = {
  key: 'root',
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'posts',
    'account',
  ],
};

export const customHistory = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});
const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      logger,
    ),
  ),
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
