import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mui, { AppBar, MenuItem, Drawer, Tabs, Tab, Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import * as colors from 'material-ui/styles/colors'
const muiTheme = getMuiTheme(muiStyle)

import { muiStyle } from 'Scripts/config'
import s from 'Styles/index'

import DevTools from 'Containers/DevTools'


function handleActive(tab) {
  browserHistory.push(tab.props.route)
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.state = {open: false}
  }

  handleToggle() { this.setState({ open: !this.state.open }) }

  handleClose() { this.setState({ open: false }) }

  render() {
    let DevToolsNode = ''
    if(process.env.NODE_ENV === 'development') {
      DevToolsNode = <DevTools />
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Марафон"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={::this.handleToggle}
          />
          <div className={s.Wrapper}>
            {this.props.children}
          </div>
          {DevToolsNode}
        </div>
      </MuiThemeProvider>
    )
  }
}
