import { createAction } from "@reduxjs/toolkit";
import { put,call, takeEvery } from "redux-saga/effects";
import { storage } from "../../../utils/utils";
import { fetchUserData, me } from "../auth/sagas";
import { initializedSuccess } from "./appSlice";


export const initializeApp = createAction<void>('initializeApp')

export function* initialize() {
  try {
    if(storage("token")){
      yield call(fetchUserData)
    }
      yield put(initializedSuccess())

  } catch (err) {
    console.log(err);
  }
}

export function* appSaga() {
  yield takeEvery(initializeApp.type, initialize);
}

  