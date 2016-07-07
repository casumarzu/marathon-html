import {
  SHOW_SPRINT_SUCCESS,
  SHOW_SPRINT_ERROR,
  SHOW_SPRINTS_SUCCESS,
  SHOW_SPRINTS_ERROR
} from 'Constants/Sprints.Constants'

import { Sprints } from 'Api/Marathon'
const sprints = new Sprints()

export function index() {
  return (dispatch) => {
    sprints.index().then(
      json => dispatch({
        type: SHOW_SPRINTS_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_SPRINTS_ERROR,
        payload: err
      })
    )
  }
}

export function show(id) {
  return (dispatch) => {
    sprints.show(id).then(
      json => dispatch({
        type: SHOW_SPRINT_SUCCESS,
        payload: json
      }),
      err => dispatch({
        type: SHOW_SPRINT_ERROR,
        payload: err
      })
    )
  }
}
