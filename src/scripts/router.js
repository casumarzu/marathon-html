import App from './containers/App'
import About from './containers/About'
import Sprints from './containers/Sprints'
import Sprint from './containers/Sprint'
import Distance from './containers/Distance'
import React, { Component } from 'react'
import { Router, IndexRoute, Route } from 'react-router'

export default class Routes extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Sprints } />
          <Route path="about" component={ About } />
          <Route path="sprints" component={ Sprints } />
          <Route path="sprint/:id" component={ Sprint } />
          <Route path="sprint/:race_id/distance/:distance_id" component={ Distance } />
        </Route>
      </Router>
    )
  }
}
