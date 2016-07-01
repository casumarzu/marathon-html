import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { AppBar, Tabs, Tab, Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

function handleActive(tab) {
  browserHistory.push(tab.props.route)
}

export default class App extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Марафон"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
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
