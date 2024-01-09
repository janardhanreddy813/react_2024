import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialData = {
  users: [],
  status: '',
  error: false,
}

export const fetchUsers = createAsyncThunk('user/async', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
})
const userSlice = createSlice({
  name: 'user',
  initialState: initialData,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'Loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'completed'
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  },
})

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export default store
