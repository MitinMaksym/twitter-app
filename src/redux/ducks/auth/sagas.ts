import { createAction, PayloadAction } from '@reduxjs/toolkit'
import {  call, put, takeEvery } from 'redux-saga/effects'
import { authApi, AuthResponse } from '../../../api/authApi'
import { UserLoginCredentials } from '../../../components/auth/SignInModal'
import { storage } from '../../../utils/utils'
import { setAuth, setLoading } from './authSlice'

export const login = createAction<UserLoginCredentials>('login')
export const logout = createAction<void>('logout')
export const me = createAction<void>('me')

function* saveAuthData ({user,token}:AuthResponse){
  yield put(setAuth({ user, authenticated: true }))
    storage("token",token)
    yield put(setLoading(false))
}

function* clearAuthData(){
  yield put(setLoading(false))
  yield put(setAuth({ user: null, authenticated: false }))
  localStorage.clear()
}

export function* signIn(action: PayloadAction<UserLoginCredentials>) {
  try {
    yield put(setLoading(true))
    const data: AuthResponse = yield call(authApi.login, action.payload)
   yield saveAuthData(data)

  } catch (err) {
    yield clearAuthData()
    console.log(err)
  }
}


export function* signOut() {
  try {
    yield put(setLoading(true))
  yield call(authApi.logout)
    yield clearAuthData()
  } catch (err) {
    yield clearAuthData()
    console.log(err)
  }
}

export function* fetchUserData() {
  try {
    yield put(setLoading(true))
    const data: AuthResponse = yield call(authApi.fetchAuthData)
    yield saveAuthData(data)
  } catch (err) {
    yield clearAuthData()
    console.log(err)
  }
}

export function* authSaga() {
  yield takeEvery(login.type, signIn)
  yield takeEvery(logout.type, signOut)
}

