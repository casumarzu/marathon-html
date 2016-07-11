import 'babel-polyfill'
require('react-tap-event-plugin')()
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import Routes from './router'
import configureStore from './store/configureStore'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
    <Routes history={history}/>
  </Provider>
  , document.getElementById('root')
)
