import {
  SHOW_DISTANCE_SUCCESS,
  SHOW_DISTANCE_ERROR,
  SHOW_DISTANCES_SUCCESS,
  SHOW_DISTANCES_ERROR,
  CREATE_DISTANCE_SUCCESS,
  CREATE_DISTANCE_ERROR,
} from 'Constants/Distances.Constants'

import { Distances } from 'Api/Marathon'
const distances = new Distances()

export function index(race_id) {
  return (dispatch) => {
    distances.index(race_id).then(
      json => dispatch({
        type: SHOW_DISTANCES_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_DISTANCES_ERROR,
        payload: err
      })
    )
  }
}

export function show(race_id, distance_id) {
  return (dispatch) => {
    distances.show(race_id, distance_id).then(
      json => dispatch({
        type: SHOW_DISTANCE_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_DISTANCE_ERROR,
        payload: err
      })
    )
  }
}
