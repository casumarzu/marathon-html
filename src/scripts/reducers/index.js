import { combineReducers } from 'redux'
import sprints from './Sprints.Reducer'
import distances from './Distances.Reducer'
import participants from './Participants.Reducer'

export default combineReducers({
  sprints,
  distances,
  participants
})
