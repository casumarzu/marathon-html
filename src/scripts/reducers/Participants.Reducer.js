import {
  SHOW_PARTICIPANT_SUCCESS,
  SHOW_PARTICIPANT_ERROR,
  SHOW_PARTICIPANTS_SUCCESS,
  SHOW_PARTICIPANTS_ERROR,
  CREATE_PARTICIPANT_SUCCESS,
  CREATE_PARTICIPANT_ERROR,
  UPDATE_PARTICIPANT_SUCCESS,
  UPDATE_PARTICIPANT_ERROR,
  DELETE_PARTICIPANT_SUCCESS,
  DELETE_PARTICIPANT_ERROR
} from 'Constants/Participants.Constants'

let initialState = {
  list: [],
  item: {},
  error: {}
}

export default function participantsList(state = initialState, action) {
  switch (action.type) {
    case SHOW_PARTICIPANTS_SUCCESS:
      return { ...state, list: action.payload }

    case SHOW_PARTICIPANT_SUCCESS:
      return { ...state, item: action.payload }

    case CREATE_PARTICIPANT_SUCCESS:
      return { ...state, message: 'CREATE_PARTICIPANT_SUCCESS!!!'}

    default:
      return state;
  }
}
