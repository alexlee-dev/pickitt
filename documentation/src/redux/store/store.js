import { createStore, compose, combineReducers } from 'redux'
import uiReducer from '../reducers/ui'

let composeEnhancer

if (process.env.NODE_ENV === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} else {
  composeEnhancer = compose
}

const store = createStore(
  combineReducers({
    ui: uiReducer
  }),
  composeEnhancer()
)

export default store
