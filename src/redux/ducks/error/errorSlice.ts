import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 type ErrorDetails = {title:string;message:string}

  
const initialState = {
    showError: false,
    message: '',
    title: '',
}

export const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    showError(state, action:PayloadAction<ErrorDetails>) {
      state.showError = true
      const { title, message } = action.payload
      state.message = message
      state.title = title
    },
    clearError(state) {
      state.showError = false
      state.message = ''
      state.title = ''
    },
  },
})

export const {  showError, clearError  } = errorSlice.actions;

export default errorSlice.reducer;