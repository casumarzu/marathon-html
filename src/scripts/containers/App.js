import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/sprints"}>Sprints</Link>
            </li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    )
  }
}
