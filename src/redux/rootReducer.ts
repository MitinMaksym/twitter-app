import { combineReducers } from '@reduxjs/toolkit'
import appSlice from './ducks/app/appSlice'
import authSlice from './ducks/auth/authSlice'
import tagsSlice from './ducks/tags/tagsSlice'
import tweetsSlice from './ducks/tweets/tweetsSlice'

const rootReducer = combineReducers({
  app:appSlice,
  auth: authSlice,
  tweets: tweetsSlice,
  tags: tagsSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
