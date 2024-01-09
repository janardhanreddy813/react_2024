import { createStore } from 'redux'

const initialstate = {
  count: 0,
}
const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + 1,
      }
    case 'DEC':
      return {
        count: state.count - 1,
      }

    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
