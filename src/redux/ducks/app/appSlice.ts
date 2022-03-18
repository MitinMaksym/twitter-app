import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  initialized:boolean
}

const initialState = {
    initialized:false

} as InitialState

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializedSuccess(state) {
      state.initialized = true
    },
   
  },
})

export const { initializedSuccess } = appSlice.actions
export default appSlice.reducer
