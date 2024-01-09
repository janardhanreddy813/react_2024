import { configureStore, createSlice } from '@reduxjs/toolkit'
import { withdraw } from '../redux/action'

const state = {
  balance: 0,
  fullName: '',
  mobile: null,
}
const transactionState = []

const userSlice = createSlice({
  name: 'user',
  initialState: state,
  reducers: {
    mobileUpdate: (state, action) => {
      state.mobile = action.payload
    },
    nameUpdate: (state, action) => {
      state.fullName = action.payload
    },

    UserDeposit: (state, action) => {
      state.balance = state.balance + +action.payload
    },
    UserWithdraw: (state, action) => {
      state.balance = state.balance - action.payload
    },
    UserReset: (state) => {
      return {
        balance: 0,
        fullName: '',
        mobile: null,
      }
    },
  },
})

const tranactionSlice = createSlice({
  name: 'transaction',
  initialState: transactionState,
  reducer: {
    addTransaction: (state, action) => {
      state.push(action.payload)
    },
  },
})
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    transaction: tranactionSlice.reducer,
  },
})
console.log(tranactionSlice)
//console.log(userSlice)
export default store

export const {
  UserWithdraw,
  UserDeposit,
  mobileUpdate,
  nameUpdate,
  UserReset,
} = userSlice.actions

export const { addTransaction } = tranactionSlice.actions
