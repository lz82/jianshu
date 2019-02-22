import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'

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

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer) 

export default store