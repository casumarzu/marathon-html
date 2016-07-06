import _ from 'lodash'
import { firebaseDb } from 'Apis/Google.Firebase'
import { snapshotToList, recordFromSnapshot } from './Helpers'
import {
  SHOW_DISTANCE_SUCCESS,
  SHOW_DISTANCE_ERROR,
  SHOW_DISTANCES_SUCCESS,
  SHOW_DISTANCES_ERROR,
  CREATE_DISTANCE_SUCCESS,
  CREATE_DISTANCE_ERROR,
} from 'Constants/Distances.Constants'


export const showItem = window.showItem = function showItem(id) {
  return (dispatch) => {
    let distanceItem = _.find(distancesList, { id })
    dispatch({
      type: SHOW_DISTANCE_SUCCESS,
      payload: distanceItem
    })
  }
}

let distancesList = []

export function registerListeners() {
  return (dispatch, getState) => {
    const ref = firebaseDb.ref('distances')
    ref.on('value', snapshot => {
      distancesList = snapshotToList(snapshot)
      dispatch({
        type: SHOW_DISTANCES_SUCCESS,
        payload: distancesList
      })
    })

    ref.on('child_changed', snapshot => dispatch({
      type: UPDATE_DISTANCE_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }))
  }
}
