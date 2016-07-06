import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mui, { AppBar, MenuItem, Drawer, Tabs, Tab, Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'

import * as colors from 'material-ui/styles/colors'
import { muiStyle } from 'Scripts/config'
import s from 'Styles/index'

// import Header from 'Components/layouts/Header'

const muiTheme = getMuiTheme(muiStyle)

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

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{
            width: '100%',
            height: '100%',
            background: colors.yellow300
          }}>
          <AppBar
            title="Марафон"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={::this.handleToggle}
          />
          <Drawer
            className={s.Navigation}
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <MenuItem>
              <Link to="/">Забеги</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">Информация</Link>
            </MenuItem>
          </Drawer>
          <div className={s.Wrapper}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
