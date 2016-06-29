import App from './containers/App'
import About from './containers/About'
import Sprints from './containers/Sprints'
import Sprint from './containers/Sprint'
import React, { Component } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

window.browserHistory = browserHistory

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Sprints } />
          <Route path="about" component={ About } />
          <Route path="sprints" component={ Sprints } />
          <Route path="sprint/:id" component={ Sprint } />
        </Route>
      </Router>
    )
  }
}
