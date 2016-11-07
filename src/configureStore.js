import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from './reducers'
import { routerReducer } from 'react-router-redux'

const logger = createLogger()

const middleware = [logger, thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  {},
  enhancers
)

export default store
