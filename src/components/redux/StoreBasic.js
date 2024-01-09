import { createStore } from 'redux'

const initialState = {
  balance: 0,
  fullName: '',
  phone: null,
}
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'deposit':
      return {
        ...state,
        balance: state.balance + +action.payload,
      }

    case 'withdraw':
      return {
        ...state,
        balance: state.balance - +action.payload,
      }

    case 'nameUpdate':
      return { ...state, fullName: action.payload }

    case 'updatePhone':
      return {
        ...state,
        phone: action.payload,
      }

    case 'reset':
      return initialState
    default:
      return state
  }
}
const store = createStore(accountReducer)

export default store
