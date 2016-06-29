import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { FIREBASE_CONFIG } from 'Scripts/config'

export default class GoogleFirebaseAPI {
  constructor() {
    firebase.initializeApp(FIREBASE_CONFIG)
    this.marathons = []
    this.db = firebase.database()
    this.marathonsRef = this.db.ref('marathons')
    this.marathonsRef.on('value', snapshot => {
      snapshot.forEach(data => {
        this.marathons.push(data.val())
        console.log(this.marathons)
      })
    })
  }

  showMarathon() {
    return this.marathonsRef
  }

  addMarathon(title='Марафон', info='Будем много бегать', schedule='11:00-15:00', organization='на высшем', infrastructure='В лесу', price=300, type='present', participants=[]) {
    this.marathonsRef.push(
      { title, info, schedule, organization, infrastructure, price, type, participants }
    )
  }

  removeMarathon(id) {
    this.db.ref(`marathons/${id}`).remove()
  }

  removeAll() {
    const onRremove = data => console.log('OnRemove', data)
    this.marathonsRef.remove(onRremove)
  }
}
