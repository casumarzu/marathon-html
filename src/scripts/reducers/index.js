import { combineReducers } from 'redux'
import sprints from './Sprints.Reducer'
import participants from './Participants.Reducer'

export default combineReducers({
  sprints,
  participants
})
