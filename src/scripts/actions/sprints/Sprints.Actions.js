import { ADD_ITEM, CHANGE_ITEM, REMOVE_ITEM } from 'Constants/Sprints.Constants'
import _ from 'lodash'

export function addItem(list) {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: list
    })
  }
}

export function changeItem(list, id) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_ITEM,
      payload: changeItemById(list, id)
    })
  }
}

export function removeItem(list, id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: arrayWithoutItemById(list, id)
    })
  }
}

function changeItemById (list, id) {
  const index = _.findIndex(list, (item) => item.id === id)
  const item = list[index]
  return list
}

function arrayWithoutItemById (list, id) {
  const index = _.findIndex(list, (item) => item.id === id)
  const result = list
  delete result[index]
  return _.compact(result)
}
