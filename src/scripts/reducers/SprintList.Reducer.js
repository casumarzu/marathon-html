import { ADD_ITEM, CHECK_ITEM } from '../constants/SprintList.Constants'

const initialState = {
  list: [
    {
      id: 1,
      title: 'Забег 1',
      info: 'забег бег',
      schedule: 'Воскресенье 10:00-13:00',
      organization: 'Собираемся и бежим',
      infrastructure: 'Это тут, это там',
      price: 20000,
      type: 'past'
    },
    {
      id: 2,
      title: 'Забег 2',
      info: 'забег бег',
      schedule: 'Воскресенье 10:00-13:00',
      organization: 'Собираемся и бежим',
      infrastructure: 'Это тут, это там',
      price: 100,
      type: 'present'
    },
    {
      id: 3,
      title: 'Забег 3',
      info: 'забег бег',
      schedule: 'Воскресенье 10:00-13:00',
      organization: 'Собираемся и бежим',
      infrastructure: 'Это тут, это там',
      price: 3000,
      type: 'future'
    }
  ]
}

export default function addItem(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: action.payload }
    case CHECK_ITEM:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}
