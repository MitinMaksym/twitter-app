import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../types'

type InitialState = {
  authenticated: boolean
  user: User | null
  loading: boolean
}

export type AuthPayload = {
  authenticated: boolean
  user: User | null
}

const initialState = {
  authenticated: false,
  user: null,
  loading: false,
} as InitialState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthPayload>) {
      const { authenticated, user } = action.payload
      state.user = user
      state.authenticated = authenticated
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const { setAuth, setLoading } = authSlice.actions
export default authSlice.reducer
