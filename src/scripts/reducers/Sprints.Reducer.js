import _ from 'lodash'
import {
  SHOW_SPRINTS_SUCCESS,
  SHOW_SPRINTS_ERROR,
  SHOW_SPRINT_SUCCESS,
  SHOW_SPRINT_ERROR
} from 'Constants/Sprints.Constants'

const initialState = {
  item: {},
  list: [],
  error: {}
}

export default function sprintsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPRINT_SUCCESS:
      return { ...state, item: action.payload }

    case SHOW_SPRINT_ERROR:
      return { ...state, error: action.payload }

    case SHOW_SPRINTS_SUCCESS:
      return { ...state, list: action.payload }

    case SHOW_SPRINTS_ERROR:
      return { ...state, error: action.payload }

    default:
      return state;
  }
}
