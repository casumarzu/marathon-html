import { ADD_ITEM, CHANGE_ITEM, REMOVE_ITEM } from 'Constants/Participants.Constants'

let initialState = {
  list: [
    {
      id: 1,
      name: 'Иван Иванов',
      age: 26,
      gender: 'male',
      club: 'Тверь Клуб',
      country: 'Россия, Тверь',
      phone: '+7-920-123-45-67',
      allowed: true,
      paid: true
    },
    {
      id: 2,
      name: 'Петр Петров',
      age: 27,
      gender: 'male',
      club: 'Тверь Клуб',
      country: 'Россия, Тверь',
      phone: '+7-920-123-45-67',
      allowed: false,
      paid: false
    }
  ]
}

export default function participantsList(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: action.payload }
    case CHANGE_ITEM:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}
