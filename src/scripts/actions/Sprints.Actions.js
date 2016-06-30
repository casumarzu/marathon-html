import _ from 'lodash'
import { firebaseDb } from 'Apis/Google.Firebase'
import {
  SHOW_SPRINT_SUCCESS,
  SHOW_SPRINT_ERROR,
  SHOW_SPRINTS_SUCCESS,
  SHOW_SPRINTS_ERROR,
  UPDATE_SPRINT_SUCCESS,
  UPDATE_SPRINT_ERROR,
} from 'Constants/Sprints.Constants'

import { snapshotToList, recordFromSnapshot } from './Helpers'


export function showItem(id) {
  return (dispatch) => {
    let sprintItem = _.find(sprintsList, { id: +id })
    dispatch({
      type: SHOW_SPRINT_SUCCESS,
      payload: {
        id, sprintsList, sprintItem
      }
    })
  }
}



export function changeItem(sprint, changes) {
  return (dispatch) => {
    function onError(error) {
      if (error) {
        console.error('ERROR @ updateSprint :', error); // eslint-disable-line no-console
        dispatch({
          type: UPDATE_SPRINT_ERROR,
          payload: error
        });
      }
    }

    firebaseDb.ref(`marathons/${sprint.key}`)
    .update(changes, onError);
  }
}



let sprintsList = []

export function registerListeners() {
  return (dispatch, getState) => {
    const ref = firebaseDb.ref('marathons')
    ref.on('value', snapshot => {
      sprintsList = snapshotToList(snapshot)
      dispatch({
        type: SHOW_SPRINTS_SUCCESS,
        payload: sprintsList
      })
    })

    ref.on('child_changed', snapshot => dispatch({
      type: UPDATE_SPRINT_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }))
  };
}
