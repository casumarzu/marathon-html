import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger()

  let middleWare = applyMiddleware(thunk)
  if(module.hot) {
    middleWare = applyMiddleware(thunk, logger)
  }
  const store = createStore(
    rootReducer,
    initialState,
    middleWare
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
