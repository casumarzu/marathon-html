import _ from 'lodash'
import { firebaseDb } from 'Apis/Google.Firebase'
import {
  SHOW_PARTICIPANT_SUCCESS,
  SHOW_PARTICIPANT_ERROR,
  SHOW_PARTICIPANTS_SUCCESS,
  SHOW_PARTICIPANTS_ERROR,
  CREATE_PARTICIPANT_SUCCESS,
  CREATE_PARTICIPANT_ERROR,
} from 'Constants/Participants.Constants'

import { snapshotToList, recordFromSnapshot } from './Helpers'


export function showItem(id) {
  return (dispatch) => {
    let participantItem = _.find(participantsList, { id })
    dispatch({
      type: SHOW_PARTICIPANT_SUCCESS,
      payload: participantItem
    })
  }
}

export function addItem(participant) {
  return (dispatch) => {
    function onError (error) {
      if (error) {
        console.error('ERROR @ createSprint :', error); // eslint-disable-line no-console
        dispatch({
          type: CREATE_PARTICIPANT_ERROR,
          payload: error
        });
      }
    }
    firebaseDb.ref('participants').push(participant, onError)
  }
}

let participantsList = []

export function registerListeners() {
  return (dispatch, getState) => {
    const ref = firebaseDb.ref('participants')
    ref.on('value', (snapshot) => {
      participantsList = snapshotToList(snapshot)
      dispatch({
        type: SHOW_PARTICIPANTS_SUCCESS,
        payload: participantsList
      })
    })

    ref.on('child_added', (snapshot) => {
      dispatch({
        type: CREATE_PARTICIPANT_SUCCESS,
        payload: recordFromSnapshot(snapshot)
      })
    })

    // ref.on('child_added', (snapshot) => dispatch({
    //   type: CREATE_PARTICIPANT_SUCCESS,
    //   payload: recordFromSnapshot(snapshot)
    // }))
  };
}
