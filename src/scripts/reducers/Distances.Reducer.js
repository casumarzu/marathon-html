import _ from 'lodash'
import {
  SHOW_DISTANCE_SUCCESS,
  SHOW_DISTANCE_ERROR,
  SHOW_DISTANCES_SUCCESS,
  SHOW_DISTANCES_ERROR,
} from 'Constants/Distances.Constants'

const initialState = {
  item: {},
  list: [],
  error: {}
}

export default function distancesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DISTANCE_SUCCESS:
      return { ...state, item: action.payload }

    case SHOW_DISTANCE_ERROR:
      return { ...state, error: action.payload }

    case SHOW_DISTANCES_SUCCESS:
      return { ...state, list: action.payload }

    case SHOW_DISTANCES_ERROR:
      return { ...state, error: action.payload }

    default:
      return state;
  }
}
