import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools'

import DevTools from 'Containers/DevTools'

const logger = createLogger()
let enhancer

if(module.hot){
  enhancer = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  )
}else {
  enhancer = compose(
    applyMiddleware(thunk)
  )
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
