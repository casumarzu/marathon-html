import 'babel-polyfill'



import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'



import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { Router, IndexRoute, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configureStore from './store/configureStore'
const store = configureStore()


import Routes from './router'

// import * as reducers from 'Reducers'
//
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )
//
// import App from './containers/App'
// import About from './containers/About'
// import Sprints from './containers/Sprints'
// import Sprint from './containers/Sprint'



// const history = syncHistoryWithStore(browserHistory, store)
//
// render(
//   <Provider store={ store }>
//     <Router history={ history }>
//       <Route path="/" component={ App }>
//         <IndexRoute component={ Sprints } />
//         <Route path="about" component={ About } />
//         <Route path="sprints" component={ Sprints } />
//         <Route path="sprint/:id" component={ Sprint } />
//       </Route>
//     </Router>
//   </Provider>
//   , document.getElementById('root')
// );

render(
  <Provider store={ store }><Routes /></Provider>
  , document.getElementById('root')
);
