import { combineReducers } from 'redux'
import sprints from './Sprints.Reducer'
import participants from './Participants.Reducer'

export default combineReducers({
  sprints,
  participants
})

// export sprints from './Sprints.Reducer'
// export participants from './Participants.Reducer'
