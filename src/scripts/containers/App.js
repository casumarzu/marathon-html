import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to={"/about"}>About</Link>
        <Link to={"/sprints"}>Sprints</Link>
        {this.props.children}
      </div>
    )
  }
}
