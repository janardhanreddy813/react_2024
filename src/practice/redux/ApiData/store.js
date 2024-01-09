import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

const initialState = {
  users: [],
}
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        users: action.payload,
      }

    default:
      return state
  }
}

const store = createStore(fetchReducer, applyMiddleware(thunk))
export default store
