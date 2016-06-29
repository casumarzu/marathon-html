import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
const store = configureStore()
import Routes from './router'

// import GoogleFirebaseAPI from 'Apis/Google.Firebase'
// const fbAPI = window.fbAPI = new GoogleFirebaseAPI

render(
  <Provider store={ store }><Routes/></Provider>
  , document.getElementById('root')
);
