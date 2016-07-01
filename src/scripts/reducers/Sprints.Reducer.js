import _ from 'lodash'
import {
  SHOW_SPRINT_SUCCESS,
  SHOW_SPRINTS_SUCCESS,
  CREATE_SPRINT_SUCCESS,
  UPDATE_SPRINT_SUCCESS,
  DELETE_SPRINT_SUCCESS,
} from 'Constants/Sprints.Constants'

const initialState = {
  deleted: null,
  item: {},
  list: [],
  previous: []
}

export default function sprintsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPRINT_SUCCESS:
      return { ...state, item: action.payload }

    case SHOW_SPRINTS_SUCCESS:
      return { ...state, list: action.payload }

    case UPDATE_SPRINT_SUCCESS:
      return {
        deleted: null,
        list: state.list.map(sprint => {
          return sprint.key === action.payload.key ? action.payload : task;
        }),
        previous: []
      }

    default:
      return state;
  }
}
