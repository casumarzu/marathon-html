import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mui, { AppBar, Tabs, Tab, Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'

function handleActive(tab) {
  browserHistory.push(tab.props.route)
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    }
  }

  render() {

    const Nav = <nav><a>Hello</a></nav>
    return (
      <div>
        <AppBar
          title="Марафон"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      {/*<nav>
        <Link to="/">index</Link>
        <Link to="/about">about</Link>
      </nav>*/}
        <Tabs>
          <Tab label="About" route="/about" onActive={handleActive}></Tab>
          <Tab label="Sprints" route="/" onActive={handleActive}></Tab>
        </Tabs>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
}
