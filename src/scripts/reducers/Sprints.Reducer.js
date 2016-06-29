import _ from 'lodash'
import {
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  CREATE_SPRINT_SUCCESS,
  UPDATE_SPRINT_SUCCESS,
  DELETE_SPRINT_SUCCESS,
} from 'Constants/Sprints.Constants'

const initialState = {
  deleted: null,
  list: [],
  previous: []
}

export default function sprintsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SPRINT_SUCCESS:
      // const preList = _.uniqBy(state.list, (e)=> {return e.key})
      return {
        deleted: null,
        list: (state.deleted && state.deleted.key === action.payload.key) ?
              [ ...state.previous ] :
              [ action.payload, ...state.list],
        previous: []
      }

    case UPDATE_SPRINT_SUCCESS:
      return {
        deleted: null,
        list: state.list.map(sprint => {
          return sprint.key === action.payload.key ? action.payload : task;
        }),
        previous: []
      }

    case DELETE_SPRINT_SUCCESS:
      return {
        deleted: action.payload,
        list: state.list.filter(task => {
          return task.key !== action.payload.key;
        }),
        previous: [ ...state.list ]
      }

    // case ADD_ITEM:
    //   return { ...state, list: action.payload }
    //
    // case CHANGE_ITEM:
    //   return { ...state, list: action.payload }

    default:
      return state;
  }
}
