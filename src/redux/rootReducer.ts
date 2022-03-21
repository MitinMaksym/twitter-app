import { combineReducers } from '@reduxjs/toolkit'
import appSlice from './ducks/app/appSlice'
import authSlice from './ducks/auth/authSlice'
import tagsSlice from './ducks/tags/tagsSlice'
import tweetsSlice from './ducks/tweets/tweetsSlice'
import errorSlice from './ducks/error/errorSlice'

const rootReducer = combineReducers({
  app:appSlice,
  error:errorSlice,
  auth: authSlice,
  tweets: tweetsSlice,
  tags: tagsSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
