import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEM } from '../constants/SprintList.Constants'
import _ from 'lodash'

export function addItem(list) {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: list
    })
  }
}

export function checkItem(list, id) {
  return (dispatch) => {
    dispatch({
      type: CHECK_ITEM,
      payload: checkItemById(list, id)
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

function checkItemById (list, id) {
  const index = _.findIndex(list, (item) => {
    return item.id === id
  })
  const item = list[index]
  item.checked = !item.checked

  return list
}

function arrayWithoutItemById (list, id) {
  const index = _.findIndex(list, (item) => {
    return item.id === id
  })
  const result = list
  delete result[index]

  return _.compact(result)
}
