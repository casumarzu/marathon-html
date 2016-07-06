import _ from 'lodash'
import {
  SHOW_DISTANCE_SUCCESS,
  SHOW_DISTANCES_SUCCESS,
  CREATE_DISTANCE_SUCCESS,
  UPDATE_DISTANCE_SUCCESS,
  DELETE_DISTANCE_SUCCESS,
} from 'Constants/Distances.Constants'

const initialState = {
  deleted: null,
  item: {},
  list: [],
  previous: []
}

export default function distancesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DISTANCE_SUCCESS:
      return { ...state, item: action.payload }

    case SHOW_DISTANCES_SUCCESS:
      return { ...state, list: action.payload }

    default:
      return state;
  }
}
