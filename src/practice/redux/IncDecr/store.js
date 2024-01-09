import { createStore } from 'redux'

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + 1,
      }

    case 'DEC':
      return {
        count: state.count - 1,
      }
      case 'RESET': return  {
        count:state.count=0
      }
        
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store


