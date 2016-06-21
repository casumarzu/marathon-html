import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import About from './containers/About'
import Sprints from './containers/Sprints'
import Sprint from './containers/Sprint'
import configureStore from './store/configureStore'
const store = configureStore()
import { Router, Route, Link, browserHistory } from 'react-router'
// import './requests'

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/" component={ About } />
        <Route path="about" component={ About } />
        <Route path="sprints" component={ Sprints } />
        <Route path="sprint/:id" component={ Sprint } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
