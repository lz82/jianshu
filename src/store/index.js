import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import { pageHeader } from '../components/page-header'

const rootReducer = combineReducers({
  pageHeader
})


const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer) 

sagaMiddleware.run(sagas)

export default store