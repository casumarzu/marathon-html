import _ from 'lodash'
import { firebaseDb } from 'Apis/Google.Firebase'
import {
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  SHOW_SPRINT_SUCCESS,
  SHOW_SPRINT_ERROR,
  CREATE_SPRINT_SUCCESS,
  CREATE_SPRINT_ERROR,
  UPDATE_SPRINT_SUCCESS,
  UPDATE_SPRINT_ERROR,
  DELETE_SPRINT_SUCCESS,
  DELETE_SPRINT_ERROR
} from 'Constants/Sprints.Constants'

export function showItem(key) {
  return (dispatch) => {
    // function onError (error) {
    //   if (error) {
    //     console.error('ERROR @ showSprint :', error); // eslint-disable-line no-console
    //     dispatch({
    //       type: SHOW_SPRINT_ERROR,
    //       payload: error
    //     });
    //   }
    // }
    firebaseDb.ref(`marathons`).limitToFirst(100)
  }
}

export function addItem(sprint) {
  return (dispatch) => {
    function onError (error) {
      if (error) {
        console.error('ERROR @ createSprint :', error); // eslint-disable-line no-console
        dispatch({
          type: CREATE_SPRINT_ERROR,
          payload: error
        });
      }
    }
    firebaseDb.ref('marathons').push(sprint, onError)
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

export function removeItem(sprint) {
  return (dispatch) => {
    function onError (error) {
      if (error) {
        console.error('ERROR @ deleteSprint :', error); // eslint-disable-line no-console
        dispatch({
          type: DELETE_SPRINT_ERROR,
          payload: error
        });
      }
    }
    firebaseDb.ref(`marathons/${sprint.key}`).remove(onError)
  }
}

export function registerListeners() {
  return (dispatch, getState) => {
    const ref = firebaseDb.ref('marathons')
    ref.on('child_added', snapshot => dispatch({
      type: CREATE_SPRINT_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }))

    ref.on('child_changed', snapshot => dispatch({
      type: UPDATE_SPRINT_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }))

    ref.on('child_removed', snapshot => dispatch({
      type: DELETE_SPRINT_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }))
  };
}


function recordFromSnapshot(snapshot) {
  let record = snapshot.val()
  record.key = snapshot.key
  return record;
}

// window.addSprint = () => {
//   addItem({
//     title:  `Забег ${_.random(1,100)}`,
//     info: 'забег бег',
//     schedule: 'Воскресенье 10:00-13:00',
//     organization: 'Собираемся и бежим',
//     infrastructure: 'Это тут, это там',
//     price: 500,
//     type: 'future'
//   })
// }

/*
props.sprintsActions.addItem(
    {
      title: 'Забег 5',
      info: 'забег бег',
      schedule: 'Воскресенье 10:00-13:00',
      organization: 'Собираемся и бежим',
      infrastructure: 'Это тут, это там',
      price: 500,
      type: 'future'
    }
)
*/
