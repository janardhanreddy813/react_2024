import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialData = {
  users: [],
  status: '',
  error: false,
}
export const UsersFetch = createAsyncThunk('user/async', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const jData = await res.json()
  return jData
})

const userSlice = createSlice({
  name: 'users',
  initialState: initialData,
  extraReducers: (bulider) => {
    bulider
      .addCase(UsersFetch.pending, (state) => {
        state.status = 'Loading'
      })
      .addCase(UsersFetch.fulfilled, (state, action) => {
        state.status = 'Completed'
        state.users = action.payload
        state.error = false
      })
      .addCase(UsersFetch.rejected, (state, action) => {
        state.status = 'Error'
        state.error = action.payload.message
      })
  },
})

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
})

export default store
