import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import configureStore from './store/configureStore'
const store = configureStore()
import Routes from './router'

render(
  <Provider store={ store }><Routes/></Provider>
  , document.getElementById('root')
)
