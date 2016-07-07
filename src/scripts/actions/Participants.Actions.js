import {
  SHOW_PARTICIPANT_SUCCESS,
  SHOW_PARTICIPANT_ERROR,
  SHOW_PARTICIPANTS_SUCCESS,
  SHOW_PARTICIPANTS_ERROR,
  CREATE_PARTICIPANT_SUCCESS,
  CREATE_PARTICIPANT_ERROR,
} from 'Constants/Participants.Constants'

import { Participants } from 'Api/Marathon'
const participants = new Participants()

export function index(race_id, distance_id) {
  return (dispatch) => {
    participants.index(race_id, distance_id).then(
      json => dispatch({
        type: SHOW_PARTICIPANTS_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_PARTICIPANTS_ERROR,
        payload: err
      })
    )
  }
}

export function show(race_id, distance_id, user_id) {
  return (dispatch) => {
    participants.show(race_id, distance_id, user_id).then(
      json => dispatch({
        type: SHOW_PARTICIPANT_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_PARTICIPANT_ERROR,
        payload: err
      })
    )
  }
}

export function add(race_id, distance_id, name, age_group, e_mail, sex, club, nation, city, phone, access, payment) {
  return (dispatch) => {
    participants.add(race_id, distance_id, name, age_group, e_mail, sex, club, nation, city, phone, access, payment).then(
      json => {
        return dispatch({
          type: CREATE_PARTICIPANT_SUCCESS,
          payload: json
        })
      },
      err => dispatch({
        type: CREATE_PARTICIPANT_ERROR,
        payload: err
      })
    )
  }
}
