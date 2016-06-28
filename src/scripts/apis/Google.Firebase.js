// import {*} from 'firebase'

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

// import {app as firebase, auth, database} from 'firebase'

export default class GoogleFirebaseAPI {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBjQGwxtw1BQGwN31SNMAW0ss63wc25FoM',
      authDomain: 'rtisvko.firebaseapp.com',
      databaseURL: 'https://rtisvko.firebaseio.com',
      storageBucket: 'rtisvko.appspot.com'
    }
    firebase.initializeApp(config)
    const database = firebase.database()
  }
}
